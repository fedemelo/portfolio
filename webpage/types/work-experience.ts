import { Location } from "./location"
import { Hideable } from "./hideable"
import { Organization } from "./organization"

export interface WorkExperience extends Location, Hideable {
  title: string
  anchor: string
  team?: string
  squad?: string
  organization: Organization
  startDate: string
  endDate?: string
  technologies: string[]
  details?: string[]
  workMode: 'remote' | 'onsite' | 'hybrid'
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  isCurrent?: boolean
}