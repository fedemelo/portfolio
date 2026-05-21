"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { House } from "lucide-react"
import { navigationItems } from "./navigation-items"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { useLanguage } from "@/contexts/language-context"
import { isCurrentPath } from "@/utils/path"

export function DesktopNavigation() {
  const pathname = usePathname()
  const { setNavigatedInternally } = useNavigationAnimation()
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link
        href="/"
        className="text-foreground hover:text-primary transition-colors"
        onClick={setNavigatedInternally}
      >
        <House className="h-5 w-5" />
      </Link>
      
      <div className="flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isCurrentPath(item.href, pathname)
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            }`}
            onClick={setNavigatedInternally}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={toggleLanguage}
        className="text-sm flex items-center gap-1"
      >
        <span className={language === "en" ? "text-foreground font-semibold" : "text-muted-foreground"}>
          EN
        </span>
        <span className="text-muted-foreground">|</span>
        <span className={language === "es" ? "text-foreground font-semibold" : "text-muted-foreground"}>
          ES
        </span>
      </button>
    </div>
  )
} 
