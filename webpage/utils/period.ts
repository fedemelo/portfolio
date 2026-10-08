type Semester = "Spring" | "Summer" | "Fall"

// Periods are stored as free English text ("Fall 2025, Spring 2026"), shared with the CV and resume
export function localizePeriod(period: string, semesterNames: Readonly<Record<Semester, string>>): string {
  return period.replace(/\b(Spring|Summer|Fall)\b/g, (semester) => semesterNames[semester as Semester])
}
