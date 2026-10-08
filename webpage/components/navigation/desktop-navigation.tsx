"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationItems } from "./navigation-items"
import { useNavigateWithSlide } from "@/hooks/useNavigateWithSlide"
import { useTranslation } from "@/hooks/useTranslation"
import { isCurrentPath } from "@/utils/path"

export function DesktopNavigation() {
  const pathname = usePathname()
  const navigate = useNavigateWithSlide()
  const t = useTranslation()

  return (
    <div className="hidden md:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isCurrentPath(item.href, pathname)
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
          onClick={(e) => { e.preventDefault(); navigate(item.href) }}
        >
          {t.nav[item.translationKey]}
        </Link>
      ))}
    </div>
  )
}
