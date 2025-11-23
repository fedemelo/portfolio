import { Hideable } from "./hideable"

export interface Teaching extends Hideable {
  id: string
  title: string
  courseCode: string
  period: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  supervisor?: string
  isCurrent?: boolean
}