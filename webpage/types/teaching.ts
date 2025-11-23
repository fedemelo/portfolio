import { Location } from "./location"
import { Course } from "./relevant-coursework"
import { Hideable } from "./hideable"
import { Organization } from "./organization"

export interface Teaching extends Location, Hideable {
  title: string
  organization: Organization
  course?: Course
  department?: string
  supervisor?: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  isCurrent?: boolean
}