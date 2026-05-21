"use client"

import { usePersonalInfo } from "@/hooks/useApiData"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { HeroSection, MobileTwoPanel, DesktopTwoPanel } from "./home"
import { HomeLoadingSkeleton } from "./home/home-loading-skeleton"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"

export default function HomePage() {
  const { data: personalInfo, loading, error } = usePersonalInfo()
  const usePhoneAnimation = useBreakpoint(1024)

  if (loading)return <HomeLoadingSkeleton />

  if (error) return <Error pageName="personal information" error={error} />

  if (!personalInfo || personalInfo.length === 0) return <NoItemsAvailable itemName="personal information" />

  const info = personalInfo[0]
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <HeroSection personalInfo={info} />
        {usePhoneAnimation ? <MobileTwoPanel /> : <DesktopTwoPanel />}
      </div>
    </div>
  )
}
