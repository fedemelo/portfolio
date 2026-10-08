"use client"

import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react'
import type { Language } from '../../shared/schemas/utils'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectBrowserLanguage(): Language {
  return navigator.language.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  // Starts as 'en' to match the server render; the browser language is only knowable after hydration
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => { setLanguage(detectBrowserLanguage()) }, [])

  useEffect(() => { document.documentElement.lang = language }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
