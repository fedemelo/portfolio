import { removeDiacritics } from './remove-diacritics'

export function generateSlug(text: string): string {
  return removeDiacritics(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
