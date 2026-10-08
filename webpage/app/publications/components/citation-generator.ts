import type { Publication } from "@/types"
import { removeDiacritics } from "@/utils/remove-diacritics"

// Built only from language-independent fields, so the citation is the same whatever the display language
export class CitationGenerator {
  private publication: Publication

  constructor(publication: Publication) {
    this.publication = publication
  }

  // Author names are stored as "Last, F.", and the last name may span several words
  generateCitationKey(): string {
    const firstAuthorLastName = this.publication.authors[0]?.name.split(',')[0] ?? ''
    const asciiLastName = removeDiacritics(firstAuthorLastName)
      .toLowerCase()
      .replace(/[^a-z]/g, '')

    return `${asciiLastName || 'unknown'}${this.publication.year}`
  }

  generateAuthors(): string {
    return this.publication.authors
      .map(author => author.name)
      .join(' and ')
  }

  generateBibTeX(): string {
    const { citation, url, year } = this.publication

    // Double braces stop bibliography styles from lowercasing the title, which would break its proper nouns
    const fields = [
      `author = {${this.generateAuthors()}}`,
      `title = {{${escapeBibTeX(citation.title)}}}`,
      ...this.generateTypeFields(),
      `year = {${year}}`,
    ]

    if (citation.note) {
      fields.push(`note = {${escapeBibTeX(citation.note)}}`)
    }

    if (url) {
      fields.push(`url = {${url}}`)
    }

    const fieldsString = fields
      .map(field => `  ${field}`)
      .join(',\n')

    return `@${this.generateEntryType()}{${this.generateCitationKey()},\n${fieldsString}\n}`
  }

  generateFilename(): string {
    return `${this.generateCitationKey()}.bib`
  }

  // BibTeX has no undergraduate thesis entry; the conventional stand-in is @mastersthesis with its label overridden by `type`
  private generateEntryType(): string {
    switch (this.publication.type) {
      case 'undergraduateThesis': return 'mastersthesis'
      case 'conferencePaper': return 'inproceedings'
      default: return 'misc'
    }
  }

  private generateTypeFields(): string[] {
    const institution = escapeBibTeX(this.publication.institution)
    switch (this.publication.type) {
      case 'undergraduateThesis':
        return [`type = {Undergraduate thesis}`, `school = {${institution}}`, ...this.generateAddressField()]
      case 'conferencePaper':
        return [
          `booktitle = {${escapeBibTeX(this.publication.citation.venue)}}`,
          `organization = {${institution}}`,
          ...this.generateAddressField(),
        ]
      default:
        return []
    }
  }

  private generateAddressField(): string[] {
    const location = [this.publication.city, this.publication.state, this.publication.country]
      .filter(Boolean)
      .join(', ')
    return location ? [`address = {${location}}`] : []
  }
}

function escapeBibTeX(text: string): string {
  return text.replace(/[&%$#_]/g, '\\$&')
}
