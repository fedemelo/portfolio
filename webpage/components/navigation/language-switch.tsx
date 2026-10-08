"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 pr-3 text-xs font-medium">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
        title="Switch to English"
      >
        <span className="text-base leading-none">🇺🇸</span>
        <span>EN</span>
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLanguage('es')}
        className={`flex items-center gap-1 transition-opacity ${language === 'es' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
        title="Cambiar a español"
      >
        <span>ES</span>
        <span className="text-base leading-none">🇨🇴</span>
      </button>
    </div>
  )
}
