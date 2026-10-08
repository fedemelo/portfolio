"use client"

import Link from "next/link"
import { House } from "lucide-react"
import { usePathname } from "next/navigation"
import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"
import { ThemeToggle } from "./theme-toggle"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { useSlideLinkClick } from "@/hooks/useNavigateWithSlide"
import { LanguageSwitch } from "./language-switch"

export function Navigation() {
  const { shouldShowNavigation, shouldRunNavBarAnimation } = useNavigationAnimation()
  const pathname = usePathname()
  const followLink = useSlideLinkClick()

  let navigationAnimationClasses = 'translate-y-0 opacity-100'
  if (shouldRunNavBarAnimation) {
    navigationAnimationClasses = shouldShowNavigation
      ? 'translate-y-0 opacity-100'
      : '-translate-y-full opacity-0'
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none transition-all duration-700 ease-out ${navigationAnimationClasses}`}
    >
      <nav className="pointer-events-auto flex items-center gap-2 px-4 h-11 rounded-full border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm w-full max-w-2xl">
        <Link
          href="/"
          className={`flex items-center transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground"}`}
          onClick={(e) => followLink(e, "/")}
        >
          <House className="h-4 w-4" />
        </Link>
        <div className="hidden md:block w-px h-4 bg-border mx-1" />
        <MobileNavigation />
        <DesktopNavigation />
        <div className="flex-1" />
        <LanguageSwitch />
        <ThemeToggle />
      </nav>
    </div>
  )
}
