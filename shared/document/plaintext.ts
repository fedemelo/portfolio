// Renders a document as plain text: left-justified, no bold/italic/underline,
// no tabs (the format Stanford's Career Center guideline recommends for
// pasting into email bodies and ATS text boxes).
import type { DocumentModel, Header, Organization, Section } from "./model";

const ROLE_PERIOD_COLUMN = 60;

function heading(title: string): string[] {
  return ["", title.toUpperCase(), ""];
}

function bullets(items: string[], indent: string): string[] {
  return items.map((item) => `${indent}- ${item}`);
}

function headerLines(header: Header): string[] {
  return [header.name, header.contacts.map((c) => c.text).join(" | ")];
}

function organizationLines(org: Organization): string[] {
  const subheading = [org.location, org.period].filter(Boolean).join("  ");
  const roles = org.roles.flatMap((role) => {
    const title = role.subtitle ? `  ${role.title} — ${role.subtitle}` : `  ${role.title}`;
    return [
      `${title}${" ".repeat(Math.max(1, ROLE_PERIOD_COLUMN - title.length))}${role.period}`,
      ...(role.supervisor ? [`  Supervisor: ${role.supervisor}`] : []),
      ...bullets(role.bullets, "    "),
    ];
  });
  return [org.name, ...(subheading ? [subheading] : []), ...roles, ""];
}

function sectionBody(section: Section): string[] {
  switch (section.kind) {
    case "paragraph":
      return [section.text];
    case "experience":
      return section.organizations.flatMap(organizationLines);
    case "education":
      return section.schools.flatMap((school) => [
        `${school.name}  ${school.location}`,
        `  ${school.degree}  ${school.period}`,
        ...bullets(school.bullets, "    "),
        "",
      ]);
    case "awards":
      return section.awards.flatMap((award) => [
        `${award.title}  ${award.byline}`,
        `  ${award.description}`,
        "",
      ]);
    case "labeled-lines":
      return section.lines.map((line) => `${line.label}: ${line.text}`);
    case "activities":
      return section.activities.flatMap((activity) => [activity.title, ...bullets(activity.bullets, "  "), ""]);
    case "coursework":
      return section.areas.flatMap((area) => [`${area.name}:`, area.courses.join(", "), ""]);
    case "publications":
      return section.publications.flatMap((pub) => {
        const authors = pub.authors.map((a) => a.name).join(", ");
        const link = pub.link ? ` Available at: ${pub.link.text} (${pub.link.url})` : "";
        return [`${authors} (${pub.year}). "${pub.title}". ${pub.description}. ${pub.institution}.${link}`, ""];
      });
  }
}

export function toPlainText(document: DocumentModel): string {
  const lines = [
    ...headerLines(document.header),
    ...document.sections.flatMap((section) => [...heading(section.title), ...sectionBody(section)]),
  ];
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
