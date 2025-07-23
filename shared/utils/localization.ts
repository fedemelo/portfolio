import type { RichLocalizedContent, SimpleLocalizedContent, Language, ContentType } from '../schemas/utils';

export const DEFAULT_LANGUAGE: Language = 'en';

export function getLocalizedText(
  content: SimpleLocalizedContent,
  language: Language
): string {
  return content[language] ?? content[DEFAULT_LANGUAGE]!;
}

export function getLocalizedRichText(
  content: RichLocalizedContent,
  language: Language,
  contentType: ContentType = 'full'
): string {
  const langContent = content[language];
  const fallbackContent = content[DEFAULT_LANGUAGE]!;
  
  if (langContent)
    return contentType === 'short' && langContent.short ? langContent.short : langContent.full;
  
  return contentType === 'short' && fallbackContent.short ? fallbackContent.short : fallbackContent.full;
}

export function getResumeText(
  content: RichLocalizedContent,
  language: Language
): string {
  return getLocalizedRichText(content, language, 'short');
}

export function getCVText(
  content: RichLocalizedContent,
  language: Language
): string {
  return getLocalizedRichText(content, language, 'full');
}
