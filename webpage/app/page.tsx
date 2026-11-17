"use client"

import { usePersonalInfo } from "@/hooks/useApiData"
import { HeroSection } from "./home"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { useTranslation } from "@/hooks/useTranslation"

export default function HomePage() {
  const { data: personalInfo, loading, error } = usePersonalInfo()
  const t = useTranslation()

  // Blank rather than a skeleton: the hero has its own reveal, and a skeleton flashing before it looks broken
  if (loading) return null
  if (error) return <Error pageName={t.itemNames.personalInfo} error={error} />
  if (!personalInfo || personalInfo.length === 0) return <NoItemsAvailable itemName={t.itemNames.personalInfo} />

  return <HeroSection personalInfo={personalInfo[0]} />
}
