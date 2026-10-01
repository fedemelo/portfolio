// Plain-text renderers for the resume and CV, built on the same data and the
// same shared/utils functions the Svelte apps use (filtering, text-variant
// selection, date formatting, grouping) so this never drifts from what the
// PDFs actually render — see .claude/skills/sync-linkedin-experience/SKILL.md
// or `make plain-text-resume` for why this exists instead of parsing PDF output.
import type { Language } from "../schemas/utils";
import type { WorkExperience } from "../schemas/workExperience";
import type { Teaching } from "../schemas/teaching";
import type { Course } from "../schemas/course";
import type { Education } from "../schemas/education";
import type { Award } from "../schemas/award";
import type { Skill } from "../schemas/skill";
import type { PersonalInfo } from "../schemas/personalInfo";
import type { ResearchInterest } from "../schemas/researchInterest";
import type { Extracurricular } from "../schemas/extracurricular";
import type { RelevantCoursework } from "../schemas/relevantCoursework";
import type { Publication } from "../schemas/publication";
import type { Language as LanguageEntry } from "../schemas/language";

// shared/utils/year.ts uses Object.groupBy, which is only available in
// browsers and Node 21+. These scripts also run under whatever Node is on
// the developer's machine (via tsx), so polyfill it here rather than
// touching the browser-targeted util.
if (typeof Object.groupBy !== "function") {
  (Object as unknown as { groupBy: <T, K extends PropertyKey>(items: Iterable<T>, keyFn: (item: T) => K) => Partial<Record<K, T[]>> }).groupBy = (items, keyFn) => {
    const result: Record<PropertyKey, unknown[]> = {};
    for (const item of items) {
      const key = keyFn(item);
      (result[key] ??= []).push(item);
    }
    return result as never;
  };
}

import { DEFAULT_LANGUAGE, getLocalizedText, getOrgName, getResumeText, getCVText } from "../utils/localization";
import { formatLocation } from "../utils/location";
import { formatDateRange, getYearRange, getYearSequence, formatTeachingPeriod } from "../utils/year";
import { getPeriodFromDate } from "../utils/period";
import { groupByGroupId } from "../utils/group-by-group-id";

export type Mode = "resume" | "cv";

const language: Language = DEFAULT_LANGUAGE;

// shared/utils/show.ts's filterForResume/filterForCV are two separately
// generic functions (one keyed on showInResume, one on showInCV), so a
// mode-based union of them isn't callable without losing type safety. Both
// do the exact same thing modulo the key name, so express that directly.
function filterFor(mode: Mode) {
  const key = mode === "resume" ? "showInResume" : "showInCV";
  return <T extends { showInResume?: boolean; showInCV?: boolean }>(items: T[]): T[] =>
    items.filter((item) => (item[key] ?? true));
}

function textFor(mode: Mode) {
  return mode === "resume" ? getResumeText : getCVText;
}

function employmentLabel(type?: string): string | undefined {
  return ({ "full-time": "Full-time", "part-time": "Part-time", internship: "Internship" } as Record<string, string>)[type ?? ""];
}

function heading(title: string): string[] {
  return ["", title.toUpperCase(), ""];
}

function isTeaching(item: WorkExperience | Teaching): item is Teaching {
  return "courseCode" in item;
}

type ExperienceItem = WorkExperience | Teaching;

function sortExperiences(items: ExperienceItem[]): ExperienceItem[] {
  return [...items].sort((a, b) => {
    if (a.isCurrent && b.isCurrent) return 0;
    if (!a.isCurrent && b.isCurrent) return 1;
    if (a.isCurrent && !b.isCurrent) return -1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

function getGroupRange(items: ExperienceItem[], mode: Mode): string {
  const start = items.reduce((min, it) => (it.startDate < min ? it.startDate : min), items[0].startDate);
  const isCurrent = items.some((it) => it.isCurrent);
  const end = isCurrent
    ? undefined
    : items.reduce<Date | undefined>((max, it) => {
        if (!it.endDate) return max;
        return !max || it.endDate > max ? it.endDate : max;
      }, undefined);
  return formatDateRange(start, end, isCurrent, mode === "resume");
}

function getSubtitle(item: ExperienceItem, courses: Course[], mode: Mode): string | undefined {
  if (isTeaching(item)) {
    const course = courses.find((c) => c.code === item.courseCode);
    return course ? getLocalizedText(course.name, language) : undefined;
  }
  if (item.showSubtitle === false) return undefined;
  if (item.squad && item.team) return `${getLocalizedText(item.squad, language)}, ${getLocalizedText(item.team, language)}`;
  if (item.team) return getLocalizedText(item.team, language);
  return undefined;
}

function getBullets(item: ExperienceItem, mode: Mode): string[] {
  const filter = filterFor(mode);
  const text = textFor(mode);
  if (isTeaching(item)) {
    const showDescription = mode === "cv" ? (item.description?.showInCV ?? true) : (item.description?.showInResume ?? false);
    const achievements = filter(item.achievements ?? []).map((a) => text(a, language));
    const lines = showDescription && item.description ? [text(item.description, language)] : [];
    return [...lines, ...achievements];
  }
  return filter(item.details ?? []).map((d) => text(d, language));
}

function getPeriodLabel(item: ExperienceItem, mode: Mode): string {
  if (isTeaching(item)) {
    if (mode === "resume") return formatTeachingPeriod(item.period, item.startDate, item.endDate, item.isCurrent);
    return item.isUpcoming ? `${item.period} (upcoming)` : item.period;
  }
  return formatDateRange(item.startDate, item.endDate, item.isCurrent ?? false, mode === "resume");
}

function renderEntry(item: ExperienceItem, courses: Course[], mode: Mode, out: string[]): void {
  const subtitle = getSubtitle(item, courses, mode);
  const titleLine = subtitle
    ? `  ${getLocalizedText(item.title, language)} — ${subtitle}`
    : `  ${getLocalizedText(item.title, language)}`;
  out.push(`${titleLine}${" ".repeat(Math.max(1, 60 - titleLine.length))}${getPeriodLabel(item, mode)}`);
  if (isTeaching(item) && item.supervisor) out.push(`  Supervisor: ${item.supervisor}`);
  for (const bullet of getBullets(item, mode)) out.push(`    - ${bullet}`);
}

/**
 * Renders one Experience-style section (Work Experience, Teaching, or the
 * resume's merged "Experience"). `items` should already be filtered to the
 * set this section covers — pass [...WORK_EXPERIENCE, ...TEACHING] for the
 * resume's single merged section, or each array separately for the CV's two
 * sections.
 */
export function formatExperienceSection(title: string, items: ExperienceItem[], courses: Course[], mode: Mode): string[] {
  const out = heading(title);
  const sorted = sortExperiences(filterFor(mode)(items));
  const grouped = groupByGroupId(sorted);

  for (const entry of grouped) {
    if (entry.type === "group") {
      const first = entry.items[0];
      out.push(getOrgName(first.organization, language));
      if (!isTeaching(first)) {
        out.push(`${formatLocation({ city: first.city, state: first.state, country: first.country }, first.workMode, employmentLabel(first.employmentType))}  ${getGroupRange(entry.items, mode)}`);
      } else {
        out.push(getGroupRange(entry.items, mode));
      }
      for (const item of entry.items) renderEntry(item, courses, mode, out);
    } else {
      const item = entry.item;
      out.push(getOrgName(item.organization, language));
      if (!isTeaching(item)) {
        out.push(formatLocation({ city: item.city, state: item.state, country: item.country }, item.workMode, employmentLabel(item.employmentType)));
      }
      renderEntry(item, courses, mode, out);
    }
    out.push("");
  }
  return out;
}

export function formatHeader(personalInfo: PersonalInfo, mode: Mode): string[] {
  if (mode === "resume") {
    return [
      personalInfo.name,
      [personalInfo.webpage, personalInfo.email, `linkedin.com/in/${personalInfo.linkedInPath}`, `github.com/${personalInfo.gitHubPath}`].join(" | "),
    ];
  }
  return [
    personalInfo.name,
    `Email: ${personalInfo.email}`,
    `LinkedIn: ${personalInfo.linkedInPath}`,
    `Webpage: ${personalInfo.webpage}`,
    `GitHub: ${personalInfo.gitHubPath}`,
  ];
}

export function formatEducationSection(education: Education[], mode: Mode): string[] {
  const out = heading("Education");
  for (const edu of filterFor(mode)(education)) {
    out.push(`${getOrgName(edu.organization, language)}  ${formatLocation({ city: edu.city, state: edu.state, country: edu.country })}`);
    const honors = edu.relatedAwardTitles?.includes("Summa Cum Laude") ? ", Summa Cum Laude" : "";
    out.push(`  ${getLocalizedText(edu.degree, language)}${honors}  ${getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}`);
    if (edu.gpa) {
      const context = edu.gpaContext ? ` — ${textFor(mode)(edu.gpaContext, language)}` : "";
      out.push(`    - Cumulative GPA: ${edu.gpa}${context}`);
    }
    const showKey = mode === "resume" ? "showInResume" : "showInCV";
    for (const detail of edu.details ?? []) {
      if ((detail as Record<string, unknown>)[showKey] === false) continue;
      out.push(`    - ${textFor(mode)(detail, language)}`);
    }
    out.push("");
  }
  return out;
}

export function formatAwardsSection(awards: Award[], mode: Mode): string[] {
  const out = heading("Awards & Honors");
  for (const award of filterFor(mode)(awards)) {
    const count = award.instances?.length ?? 1;
    const label = count > 1 ? ` (${count} times)` : "";
    const org = getOrgName(award.organization, language);
    const dateLabel = award.instances?.length
      ? getYearSequence(award.instances.map((i) => i.date))
      : award.date
        ? getYearRange(award.date)
        : "";
    out.push(`${getLocalizedText(award.title, language)}${label}  ${org}${dateLabel ? `, ${dateLabel}` : ""}`);
    out.push(`  ${textFor(mode)(award.description, language)}`);
    out.push("");
  }
  return out;
}

export function formatSkillsSection(skills: Skill[], mode: Mode): string[] {
  const out = heading("Technical Experience");
  for (const category of filterFor(mode)(skills)) {
    out.push(`${getLocalizedText(category.category, language)}: ${category.skills.join(", ")}`);
  }
  return out;
}

export function formatResearchInterests(researchInterests: ResearchInterest, mode: Mode): string[] {
  if (!(researchInterests.showInCV ?? true)) return [];
  return [...heading("Research Interests"), textFor(mode)(researchInterests.text, language)];
}

export function formatExtracurricularSection(items: Extracurricular[], mode: Mode): string[] {
  const out = heading("Extracurricular Activities");
  for (const item of filterFor(mode)(items)) {
    out.push(textFor(mode)(item.description, language));
    for (const event of filterFor(mode)(item.events)) out.push(`  - ${textFor(mode)(event, language)}`);
    out.push("");
  }
  return out;
}

export function formatRelevantCourseworkSection(items: RelevantCoursework[], mode: Mode): string[] {
  const out = heading("Relevant Coursework");
  for (const area of filterFor(mode)(items)) {
    out.push(getLocalizedText(area.area, language) + ":");
    out.push(filterFor(mode)(area.courses).map((c) => getLocalizedText(c.name, language)).join(", "));
    out.push("");
  }
  return out;
}

export function formatPublicationsSection(publications: Publication[], mode: Mode): string[] {
  const out = heading("Publications");
  for (const pub of filterFor(mode)(publications)) {
    const authors = pub.authors.map((a) => a.name).join(", ");
    const link = pub.url && pub.linkText ? ` Available at: ${getLocalizedText(pub.linkText, language)} (${pub.url})` : "";
    out.push(`${authors} (${pub.year}). "${getLocalizedText(pub.title, language)}". ${textFor(mode)(pub.description, language)}. ${pub.institution}.${link}`);
    out.push("");
  }
  return out;
}

export function formatAdditionalInfoSection(languages: LanguageEntry[], mode: Mode): string[] {
  const formatLanguage = (lang: LanguageEntry) => {
    const cert = lang.certifications?.find((c) => c.showInCV !== false);
    if (cert) {
      const [score] = cert.grade.split("/");
      return `${getLocalizedText(lang.name, language)} (${getLocalizedText(cert.name, language)} ${score} / CEFR ${cert.cefrLevel})`;
    }
    return `${getLocalizedText(lang.name, language)} (${getLocalizedText(lang.proficiency, language).toLowerCase()})`;
  };
  return [...heading("Additional Information"), `Languages: ${filterFor(mode)(languages).map(formatLanguage).join(", ")}`];
}
