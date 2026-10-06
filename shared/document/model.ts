// Absent values are null, not undefined, so they survive JSON serialization
// and Typst can read every field without a default.
export type DocumentKind = "resume" | "cv";

export type Contact = { label: string; text: string; url: string };

export type Header = { name: string; contacts: Contact[] };

export type Role = {
  title: string;
  subtitle: string | null;
  period: string;
  supervisor: string | null;
  bullets: string[];
};

export type Organization = {
  name: string;
  location: string | null;
  period: string | null;
  roles: Role[];
};

export type School = {
  name: string;
  location: string;
  degree: string;
  // Already part of a bullet; renderers that support emphasis italicize it there.
  honors: string | null;
  period: string;
  bullets: string[];
};

export type AwardEntry = {
  title: string;
  organization: string;
  date: string | null;
  description: string;
};

export type LabeledLine = { label: string; text: string };

export type Activity = { title: string; bullets: string[] };

export type CourseworkArea = { name: string; courses: string[] };

export type Author = { name: string; isUser: boolean };

export type PublicationEntry = {
  authors: Author[];
  year: number;
  title: string;
  description: string;
  institution: string;
  link: { text: string; url: string } | null;
};

export type Section =
  | { kind: "paragraph"; title: string; text: string }
  | { kind: "experience"; title: string; organizations: Organization[] }
  | { kind: "education"; title: string; schools: School[] }
  | { kind: "awards"; title: string; awards: AwardEntry[] }
  | { kind: "labeled-lines"; title: string; lines: LabeledLine[] }
  | { kind: "activities"; title: string; activities: Activity[] }
  | { kind: "coursework"; title: string; areas: CourseworkArea[] }
  | { kind: "publications"; title: string; publications: PublicationEntry[] };

export type DocumentModel = {
  kind: DocumentKind;
  header: Header;
  sections: Section[];
};
