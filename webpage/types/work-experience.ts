import { Location } from "./location"
import { Hideable } from "./hideable"

export interface WorkExperience extends Location, Hideable {
  title: string
  team?: string
  squad?: string
  organization: string
  icon?: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  responsibilities: string[]
  achievements?: string[]
  workMode: 'remote' | 'onsite' | 'hybrid'
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  isCurrent?: boolean
}