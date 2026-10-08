"use client"

import { useTranslation } from "@/hooks/useTranslation"

export function HeroDescription() {
  const t = useTranslation()

  const CanalsAI = (
    <a
      href="https://canals.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{ fontWeight: 500, color: "rgb(40, 84, 246)" }}
    >
      Canals AI
    </a>
  )

  const Uniandes = (
    <a
      href="https://uniandes.edu.co"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-black dark:text-white"
      style={{ fontFamily: '"Barlow Semi Condensed", sans-serif', fontWeight: 500 }}
    >
      Universidad de los Andes
    </a>
  )

  return (
    <p className="text-sm md:text-base text-muted-foreground font-light mb-4">
      {t.hero.descriptionPrefix} {CanalsAI}{t.hero.descriptionConjunction} {Uniandes}.
    </p>
  )
}
