import { Location } from "./location"
import { Course } from "./relevant-coursework"
import { Hideable } from "./hideable"

export interface Teaching extends Location, Hideable {
  title: string
  organization: string
  icon?: string
  course?: Course
  department?: string
  supervisor?: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  isCurrent?: boolean
}