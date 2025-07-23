"use client"

import { createContext, useContext, ReactNode } from 'react'
import type { Language } from '../../shared/schemas/utils'

interface LanguageContextType {
  language: Language
  // Future: setLanguage function for language switching
  // setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'en'

  const value = {
    language,  // Future: setLanguage
  }

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