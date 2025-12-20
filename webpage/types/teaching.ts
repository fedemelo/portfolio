import { Hideable } from "./hideable"
import { Organization } from "./organization"

export type TeachingType = "professional" | "undergraduate"

export interface Teaching extends Hideable {
  id: string
  type: TeachingType
  title: string
  organization: Organization
  city: string
  state?: string
  country?: string
  courseCode: string
  period: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  supervisor?: string
  isCurrent?: boolean
  evaluationPdfUrl?: string
}