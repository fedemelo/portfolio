import { Location } from "./location"
import { Course } from "./relevant-coursework"
import { Hideable } from "./hideable"
import { Organization } from "./organization"
import { AwardReference } from "./award"

export interface Education extends Location, Hideable {
  degree: string
  anchor: string
  organization: Organization
  startDate?: string
  graduationDate?: string
  trueEndDate?: string
  gpa?: string
  details?: string[]
  course?: Course
  supervisor?: string
  diplomaUrl?: string
  certificates?: string[]
  images?: string[]
  relatedAwards?: AwardReference[]
}
