import { Location } from "./location"
import { Hideable } from "./hideable"
import type { PublicationType } from "../../shared/schemas/publication"

export interface Author {
  name: string
  isUser: boolean
}

// Fixed-language values, since a citation must not change with the display language
export interface PublicationCitation {
  title: string
  venue: string
  note?: string
}

export interface Publication extends Location, Hideable {
  showInResume: boolean
  type?: PublicationType
  title: string
  citation: PublicationCitation
  anchor: string
  authors: Author[]
  year: string
  description: string
  institution: string
  url?: string
  linkText?: string
  pdfUrl?: string
} 