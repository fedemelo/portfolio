import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/translations'

export function useTranslation() {
  const { language } = useLanguage()
  return translations[language]
}
