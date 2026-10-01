// Prints the resume as plain text (left-justified, no bold/italic/underline,
// no tabs — the format Stanford's Career Center guideline recommends for
// pasting into email bodies and ATS text boxes), and writes it alongside the
// PDF. Built from the same shared/data + shared/utils the Svelte resume app
// renders from, so there's no second source of truth to keep in sync and no
// "which bullet variant actually rendered" ambiguity to resolve after the
// fact. Run via `make plain-text-resume`.
import { writeFileSync } from "node:fs";
import { PERSONAL_INFO } from "../shared/data/personalInfo";
import { WORK_EXPERIENCE } from "../shared/data/workExperience";
import { TEACHING } from "../shared/data/teaching";
import { COURSES } from "../shared/data/courses";
import { EDUCATION } from "../shared/data/education";
import { AWARDS } from "../shared/data/awards";
import { SKILLS } from "../shared/data/skills";
import {
  formatHeader,
  formatExperienceSection,
  formatEducationSection,
  formatAwardsSection,
  formatSkillsSection,
} from "../shared/plaintext/format";

const lines: string[] = [
  ...formatHeader(PERSONAL_INFO, "resume"),
  ...formatExperienceSection("Experience", [...WORK_EXPERIENCE, ...TEACHING], COURSES, "resume"),
  ...formatEducationSection(EDUCATION, "resume"),
  ...formatAwardsSection(AWARDS, "resume"),
  ...formatSkillsSection(SKILLS, "resume"),
];

const text = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
const outPath = "resume/Federico Melo Barrero - Resume.txt";
writeFileSync(outPath, text);
process.stdout.write(text);
process.stderr.write(`Saved: ${outPath}\n`);
