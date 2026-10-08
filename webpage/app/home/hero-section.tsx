"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { useNavigateWithSlide } from "@/hooks/useNavigateWithSlide"
import type { PersonalInfo } from "@/types"
import { useTranslation } from "@/hooks/useTranslation"
import { HeroDescription } from "./hero-description"
import { SocialLinks } from "./social-links"
import { GreenLightReveal } from "@/components/animations/green-light-reveal"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const { setHomeAnimationComplete, skipHeroAnimation } = useNavigationAnimation()
  const navigate = useNavigateWithSlide()
  const t = useTranslation()

  // If navigating back to home (vs. fresh load), start content visible immediately
  const [contentVisible, setContentVisible] = useState(() => skipHeroAnimation)

  const displayName = personalInfo.name.split(" ").slice(0, 2).join(" ")

  // When skipping the reveal, notify the nav bar that it can show immediately
  useEffect(() => {
    if (skipHeroAnimation) setHomeAnimationComplete()
  }, [skipHeroAnimation, setHomeAnimationComplete])

  return (
    <>
      {!skipHeroAnimation && (
        <GreenLightReveal
          onSpreadComplete={() => setContentVisible(true)}
          onComplete={setHomeAnimationComplete}
        />
      )}

      {/* Full-bleed: margin-left and width break out of the container. overflow-x-hidden on <html> prevents scrollbar. */}
      <section
        className="-mt-20 -mb-8 relative flex flex-col min-h-screen px-8 md:px-16"
        style={{
          background: `radial-gradient(ellipse 150% 100% at 50% 0%, hsl(var(--hero-glow)) 0%, hsl(var(--background)) 100%)`,
          marginLeft: "calc(-50vw + 50%)",
          width: "100vw",
        }}
      >
        {/* Audience CTAs — right side, vertically centered */}
        <div
          className={`absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 transition-all ease-in ${
            contentVisible
              ? "opacity-100 translate-x-0 duration-[600ms]"
              : "opacity-0 translate-x-8 duration-0"
          }`}
        >
          <AudienceCta label={t.hero.recruiterCta} onClick={() => navigate("/work-experience")} />
          <AudienceCta label={t.hero.studentCta} onClick={() => navigate("/teaching")} />
        </div>

        <div className="flex-1" />

        <div
          className={`pb-12 transition-all ease-in ${
            contentVisible
              ? "opacity-100 translate-y-0 duration-[600ms]"
              : "opacity-0 translate-y-6 duration-0"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-1">
            {t.hero.subtitle}
          </p>
          <HeroDescription />
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tight leading-none mb-4">
            {displayName}
          </h1>
          <SocialLinks personalInfo={personalInfo} />
        </div>
      </section>
    </>
  )
}

function AudienceCta({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-between gap-8 px-6 py-5 rounded-xl border-2 border-border bg-background shadow-md hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 w-64 text-left"
    >
      <span className="font-semibold text-base">{label}</span>
      <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </button>
  )
}
