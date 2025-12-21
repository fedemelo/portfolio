"use client"

import type { PersonalInfo } from "@/types"
import { OpenCVOrResume } from "@/components/open-cv-or-resume"
import { SocialLinks } from "./social-links"
import { useTheme } from "next-themes"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

const CanalsAI = (
  <a
    href="https://canals.ai"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
    style={{
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      color: "rgb(40, 84, 246)",
    }}
  >
    Canals AI
  </a>
)

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const Uniandes = (
    <a
      href="https://uniandes.edu.co"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{
        // True font should be Dax Medium
        fontFamily: '"Barlow Semi Condensed", sans-serif',
        fontWeight: 500,
        color: isDark ? "white" : "black"
      }}
    >
      Universidad de los Andes
    </a>
  )

  return (
    <div className="space-y-5 lg:pt-12">
      <h1 className="text-4xl md:text-7xl tracking-tight">
        {personalInfo.name}
      </h1>
      <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between">
        <OpenCVOrResume />
        <SocialLinks personalInfo={personalInfo} />
      </div>
      <div className="space-y-0">
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-display font-light text-justify w-full">
          Shipping AI and teaching code.
        </p>
        <p className="text-base md:text-xl text-muted-foreground font-display font-light text-justify w-full">
          Software engineer on the Parsing team at {CanalsAI}, lecturer at {Uniandes}.
        </p>
      </div>
    </div>
  )
} 