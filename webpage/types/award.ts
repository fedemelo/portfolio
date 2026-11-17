import { Location } from "./location"
import { Organization } from "./organization"

export interface AwardInstance {
  description: string
  date: string
  certificateUrl?: string
  images?: string[]
}

export interface AwardReference {
  title: string
  anchor: string
}

export interface Award extends Location {
  title: string
  anchor: string
  description: string
  organization: Organization
  date?: string
  instances?: AwardInstance[]
  certificateUrl?: string
  images?: string[]
}