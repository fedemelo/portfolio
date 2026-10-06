// The only place that decides document content. The plain-text exports and
// the PDFs both render its output, so they cannot disagree.
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
import type { DocumentKind, DocumentModel, Header, Organization, Role, Section } from "./model";

// Object.groupBy (used by getYearSequence) needs Node 21+, and these scripts
// run on whatever Node the developer has.
if (typeof Object.groupBy !== "function") {
  (Object as unknown as { groupBy: <T, K extends PropertyKey>(items: Iterable<T>, keyFn: (item: T) => K) => Partial<Record<K, T[]>> }).groupBy = (items, keyFn) => {
    const result: Record<PropertyKey, unknown[]> = {};
    for (const item of items) {
      const key = keyFn(item);
      const group = result[key] ?? [];
      group.push(item);
      result[key] = group;
    }
    return result as never;
  };
}

import { PERSONAL_INFO } from "../data/personalInfo";
import { RESEARCH_INTERESTS } from "../data/researchInterests";
import { WORK_EXPERIENCE } from "../data/workExperience";
import { TEACHING } from "../data/teaching";
import { COURSES } from "../data/courses";
import { EDUCATION } from "../data/education";
import { AWARDS } from "../data/awards";
import { SKILLS } from "../data/skills";
import { EXTRACURRICULARS } from "../data/extracurricular";
import { RELEVANT_COURSEWORK } from "../data/relevantCoursework";
import { PUBLICATIONS } from "../data/publications";
import { LANGUAGES } from "../data/languages";
import { DEFAULT_LANGUAGE, getLocalizedText, getOrgName, getResumeText, getCVText } from "../utils/localization";
import { formatLocation } from "../utils/location";
import { formatDateRange, getYearRange, getYearSequence } from "../utils/year";
import { groupByGroupId } from "../utils/group-by-group-id";

const language: Language = DEFAULT_LANGUAGE;

// filterForResume/filterForCV can't be picked by kind without losing type
// safety, so this takes the visibility key as the parameter instead.
function filterFor(kind: DocumentKind) {
  const key = kind === "resume" ? "showInResume" : "showInCV";
  return <T extends { showInResume?: boolean; showInCV?: boolean }>(items: T[]): T[] =>
    items.filter((item) => (item[key] ?? true));
}

function textFor(kind: DocumentKind) {
  return kind === "resume" ? getResumeText : getCVText;
}

function employmentLabel(type?: string): string | undefined {
  return ({ "full-time": "Full-time", "part-time": "Part-time", internship: "Internship" } as Record<string, string>)[type ?? ""];
}

type ExperienceItem = WorkExperience | Teaching;

function isTeaching(item: ExperienceItem): item is Teaching {
  return "courseCode" in item;
}

function sortExperiences(items: ExperienceItem[]): ExperienceItem[] {
  return [...items].sort((a, b) => {
    if (a.isCurrent && b.isCurrent) return 0;
    if (!a.isCurrent && b.isCurrent) return 1;
    if (a.isCurrent && !b.isCurrent) return -1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

function getGroupRange(items: ExperienceItem[]): string {
  const start = new Date(Math.min(...items.map((it) => it.startDate.getTime())));
  const isCurrent = items.some((it) => it.isCurrent);
  const end = isCurrent
    ? undefined
    : items.reduce<Date | undefined>((max, it) => {
        if (!it.endDate) return max;
        return !max || it.endDate > max ? it.endDate : max;
      }, undefined);
  return formatDateRange(start, end, isCurrent);
}

function getSubtitle(item: ExperienceItem, courses: Course[], showTeam: boolean): string | null {
  if (isTeaching(item)) {
    const course = courses.find((c) => c.code === item.courseCode);
    return course ? getLocalizedText(course.name, language) : null;
  }
  if (!showTeam || item.showSubtitle === false) return null;
  if (item.squad && item.team) return `${getLocalizedText(item.squad, language)}, ${getLocalizedText(item.team, language)}`;
  if (item.team) return getLocalizedText(item.team, language);
  return null;
}

function getBullets(item: ExperienceItem, kind: DocumentKind): string[] {
  const filter = filterFor(kind);
  const text = textFor(kind);
  if (isTeaching(item)) {
    const showDescription = kind === "cv" ? (item.description?.showInCV ?? true) : (item.description?.showInResume ?? false);
    const achievements = filter(item.achievements ?? []).map((a) => text(a, language));
    const lines = showDescription && item.description ? [text(item.description, language)] : [];
    return [...lines, ...achievements];
  }
  return filter(item.details ?? []).map((d) => text(d, language));
}

function getPeriodLabel(item: ExperienceItem): string {
  if (isTeaching(item)) return item.isUpcoming ? `${item.period} (upcoming)` : item.period;
  return formatDateRange(item.startDate, item.endDate, item.isCurrent);
}

function getLocation(item: ExperienceItem): string | null {
  if (isTeaching(item)) return null;
  return formatLocation({ city: item.city, state: item.state, country: item.country }, item.workMode, employmentLabel(item.employmentType));
}

function toRole(item: ExperienceItem, courses: Course[], kind: DocumentKind, showTeam: boolean): Role {
  return {
    title: getLocalizedText(item.title, language),
    subtitle: getSubtitle(item, courses, showTeam),
    period: getPeriodLabel(item),
    supervisor: isTeaching(item) ? (item.supervisor ?? null) : null,
    bullets: getBullets(item, kind),
  };
}

function experienceSection(title: string, items: ExperienceItem[], courses: Course[], kind: DocumentKind): Section {
  const grouped = groupByGroupId(sortExperiences(filterFor(kind)(items)));
  const organizations: Organization[] = grouped.map((entry) => {
    const roles = entry.type === "group" ? entry.items : [entry.item];
    const showTeam = kind === "cv" || entry.type === "group";
    return {
      name: getOrgName(roles[0].organization, language),
      location: getLocation(roles[0]),
      period: entry.type === "group" ? getGroupRange(entry.items) : null,
      roles: roles.map((item) => toRole(item, courses, kind, showTeam)),
    };
  });
  return { kind: "experience", title, organizations };
}

function header(personalInfo: PersonalInfo, kind: DocumentKind): Header {
  const linkedInUrl = `linkedin.com/in/${personalInfo.linkedInPath}`;
  const gitHubUrl = `github.com/${personalInfo.gitHubPath}`;
  const email = { label: "Email", text: personalInfo.email, url: `mailto:${personalInfo.email}` };
  const webpage = { label: "Webpage", text: personalInfo.webpage, url: `https://${personalInfo.webpage}` };
  if (kind === "resume") {
    return {
      name: personalInfo.name,
      contacts: [
        webpage,
        email,
        { label: "LinkedIn", text: linkedInUrl, url: `https://${linkedInUrl}` },
        { label: "GitHub", text: gitHubUrl, url: `https://${gitHubUrl}` },
      ],
    };
  }
  return {
    name: personalInfo.name,
    contacts: [
      email,
      { label: "LinkedIn", text: personalInfo.linkedInPath, url: `https://${linkedInUrl}` },
      webpage,
      { label: "GitHub", text: personalInfo.gitHubPath, url: `https://${gitHubUrl}` },
    ],
  };
}

function educationSection(education: Education[], kind: DocumentKind): Section {
  const text = textFor(kind);
  const schools = filterFor(kind)(education).map((edu) => {
    const gpaContext = edu.gpaContext && text(edu.gpaContext, language);
    const gpa = edu.gpa ? [[`Cumulative GPA: ${edu.gpa}`, gpaContext].filter(Boolean).join(" — ")] : [];
    return {
      name: getOrgName(edu.organization, language),
      location: formatLocation({ city: edu.city, state: edu.state, country: edu.country }),
      degree: getLocalizedText(edu.degree, language),
      honors: edu.relatedAwardTitles?.includes("Summa Cum Laude") ? "Summa Cum Laude" : null,
      period: getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate),
      bullets: [...gpa, ...filterFor(kind)(edu.details ?? []).map((detail) => text(detail, language))],
    };
  });
  return { kind: "education", title: "Education", schools };
}

function awardDate(award: Award): string | null {
  if (award.instances?.length) return getYearSequence(award.instances.map((i) => i.date));
  if (award.date) return getYearRange(award.date);
  return null;
}

function awardsSection(awards: Award[], kind: DocumentKind): Section {
  const entries = filterFor(kind)(awards).map((award) => {
    const count = award.instances?.length ?? 1;
    const countLabel = count > 1 ? `(${count} times)` : null;
    return {
      title: [getLocalizedText(award.title, language), countLabel].filter(Boolean).join(" "),
      organization: getOrgName(award.organization, language),
      date: awardDate(award),
      description: textFor(kind)(award.description, language),
    };
  });
  return { kind: "awards", title: "Awards & Honors", awards: entries };
}

function skillsSection(skills: Skill[], kind: DocumentKind): Section {
  const lines = filterFor(kind)(skills).map((category) => ({
    label: getLocalizedText(category.category, language),
    text: category.skills.join(", "),
  }));
  return { kind: "labeled-lines", title: "Technical Experience", lines };
}

function researchInterestsSections(researchInterests: ResearchInterest, kind: DocumentKind): Section[] {
  if (!(researchInterests.showInCV ?? true)) return [];
  return [{ kind: "paragraph", title: "Research Interests", text: textFor(kind)(researchInterests.text, language) }];
}

function extracurricularSection(items: Extracurricular[], kind: DocumentKind): Section {
  const text = textFor(kind);
  const activities = filterFor(kind)(items).map((item) => ({
    title: text(item.description, language),
    bullets: filterFor(kind)(item.events).map((event) => text(event, language)),
  }));
  return { kind: "activities", title: "Extracurricular Activities", activities };
}

function relevantCourseworkSection(items: RelevantCoursework[], kind: DocumentKind): Section {
  const areas = filterFor(kind)(items).map((area) => ({
    name: getLocalizedText(area.area, language),
    courses: filterFor(kind)(area.courses).map((c) => getLocalizedText(c.name, language)),
  }));
  return { kind: "coursework", title: "Relevant Coursework", areas };
}

function publicationsSection(publications: Publication[], kind: DocumentKind): Section {
  const entries = filterFor(kind)(publications).map((pub) => ({
    authors: pub.authors.map((a) => ({ name: a.name, isUser: a.isUser ?? false })),
    year: pub.year,
    title: getLocalizedText(pub.title, language),
    description: textFor(kind)(pub.description, language),
    institution: pub.institution,
    link: pub.url && pub.linkText ? { text: getLocalizedText(pub.linkText, language), url: pub.url } : null,
  }));
  return { kind: "publications", title: "Publications", publications: entries };
}

function additionalInfoSection(languages: LanguageEntry[], kind: DocumentKind): Section {
  const formatLanguage = (lang: LanguageEntry) => {
    const cert = lang.certifications?.find((c) => c.showInCV !== false);
    if (cert) {
      const [score] = cert.grade.split("/");
      return `${getLocalizedText(lang.name, language)} (${getLocalizedText(cert.name, language)} ${score} / CEFR ${cert.cefrLevel})`;
    }
    return `${getLocalizedText(lang.name, language)} (${getLocalizedText(lang.proficiency, language).toLowerCase()})`;
  };
  const text = filterFor(kind)(languages).map(formatLanguage).join(", ");
  return { kind: "labeled-lines", title: "Additional Information", lines: [{ label: "Languages", text }] };
}

export function buildResume(): DocumentModel {
  const kind = "resume";
  return {
    kind,
    header: header(PERSONAL_INFO, kind),
    sections: [
      experienceSection("Experience", [...WORK_EXPERIENCE, ...TEACHING], COURSES, kind),
      educationSection(EDUCATION, kind),
      awardsSection(AWARDS, kind),
      skillsSection(SKILLS, kind),
    ],
  };
}

export function buildCV(): DocumentModel {
  const kind = "cv";
  return {
    kind,
    header: header(PERSONAL_INFO, kind),
    sections: [
      ...researchInterestsSections(RESEARCH_INTERESTS, kind),
      educationSection(EDUCATION, kind),
      awardsSection(AWARDS, kind),
      experienceSection("Work Experience", WORK_EXPERIENCE, COURSES, kind),
      experienceSection("Teaching Experience", TEACHING, COURSES, kind),
      relevantCourseworkSection(RELEVANT_COURSEWORK, kind),
      publicationsSection(PUBLICATIONS, kind),
      skillsSection(SKILLS, kind),
      extracurricularSection(EXTRACURRICULARS, kind),
      additionalInfoSection(LANGUAGES, kind),
    ],
  };
}

export const DOCUMENT_BUILDERS: Record<DocumentKind, () => DocumentModel> = {
  resume: buildResume,
  cv: buildCV,
};
