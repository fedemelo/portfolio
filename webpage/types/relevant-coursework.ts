import { Course } from "./course"

export type RelevantCourse = Pick<Course, "showInCV" | "code" | "name" | "originalName" | "credits">

export interface RelevantCoursework {
  area: string
  courses: RelevantCourse[]
}