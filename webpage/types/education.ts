import { Location } from "./location"
import { Course } from "./relevant-coursework"
import { Hideable } from "./hideable"
import { Organization } from "./organization"

export interface Education extends Location, Hideable {
  degree: string
  organization: Organization
  startDate?: string
  graduationDate?: string
  trueEndDate?: string
  honors?: string
  gpa?: string
  details?: string[]
  course?: Course
  supervisor?: string
  diplomaUrl?: string
  certificates?: string[]
  images?: string[]
}
