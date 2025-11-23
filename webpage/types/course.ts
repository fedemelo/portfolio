import type { Organization } from "./organization";
import type { Hideable } from "./hideable";

export interface Course extends Hideable {
  code: string
  slug: string
  name: string
  originalName?: string
  organization: Organization
  city?: string
  state?: string
  country?: string
  department?: string
  credits?: number
  description?: string
  topics?: string[]
  teachingIds: string[]
  syllabusUrl?: string
  materialsUrl?: string
  hasPage?: boolean
}

