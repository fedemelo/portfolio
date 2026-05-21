"use client"

import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"
import { ThemeToggle } from "./theme-toggle"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function Navigation() {
  const { shouldShowNavigation, shouldRunNavBarAnimation } = useNavigationAnimation()

  return (
    <nav className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-700 ease-out ${
      shouldRunNavBarAnimation
        ? shouldShowNavigation 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
        : 'translate-y-0 opacity-100'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <MobileNavigation />
          <DesktopNavigation />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
} 
