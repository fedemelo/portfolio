// Prints the CV as plain text, mirroring cv/src/CV.svelte's section order.
// See scripts/plain-text-resume.ts for why this exists and how it stays in
// sync with the real render. Run via `make plain-text-cv`.
import { writeFileSync } from "node:fs";
import { PERSONAL_INFO } from "../shared/data/personalInfo";
import { RESEARCH_INTERESTS } from "../shared/data/researchInterests";
import { EDUCATION } from "../shared/data/education";
import { AWARDS } from "../shared/data/awards";
import { EXTRACURRICULARS } from "../shared/data/extracurricular";
import { RELEVANT_COURSEWORK } from "../shared/data/relevantCoursework";
import { WORK_EXPERIENCE } from "../shared/data/workExperience";
import { TEACHING } from "../shared/data/teaching";
import { COURSES } from "../shared/data/courses";
import { SKILLS } from "../shared/data/skills";
import { PUBLICATIONS } from "../shared/data/publications";
import { LANGUAGES } from "../shared/data/languages";
import {
  formatHeader,
  formatResearchInterests,
  formatEducationSection,
  formatAwardsSection,
  formatExperienceSection,
  formatRelevantCourseworkSection,
  formatPublicationsSection,
  formatSkillsSection,
  formatExtracurricularSection,
  formatAdditionalInfoSection,
} from "../shared/plaintext/format";

const lines: string[] = [
  ...formatHeader(PERSONAL_INFO, "cv"),
  ...formatResearchInterests(RESEARCH_INTERESTS, "cv"),
  ...formatEducationSection(EDUCATION, "cv"),
  ...formatAwardsSection(AWARDS, "cv"),
  ...formatExperienceSection("Work Experience", WORK_EXPERIENCE, COURSES, "cv"),
  ...formatExperienceSection("Teaching Experience", TEACHING, COURSES, "cv"),
  ...formatRelevantCourseworkSection(RELEVANT_COURSEWORK, "cv"),
  ...formatPublicationsSection(PUBLICATIONS, "cv"),
  ...formatSkillsSection(SKILLS, "cv"),
  ...formatExtracurricularSection(EXTRACURRICULARS, "cv"),
  ...formatAdditionalInfoSection(LANGUAGES, "cv"),
];

const text = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
const outPath = "cv/Federico Melo Barrero - CV.txt";
writeFileSync(outPath, text);
process.stdout.write(text);
process.stderr.write(`Saved: ${outPath}\n`);
