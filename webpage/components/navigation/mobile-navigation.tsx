"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navigationItems } from "./navigation-items"
import { useSlideLinkClick } from "@/hooks/useNavigateWithSlide"
import { useTranslation } from "@/hooks/useTranslation"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNavigation() {
  const pathname = usePathname()
  const followLink = useSlideLinkClick()
  const t = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigationClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false)
    followLink(e, href)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{t.nav.menuTitle}</SheetTitle>
          <SheetDescription>{t.nav.menuDescription}</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={(e) => handleNavigationClick(e, item.href)}
            >
              {t.nav[item.translationKey]}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
