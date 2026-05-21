"use client"

import Link from "next/link"
import { Menu, House } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navigationItems } from "./navigation-items"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { useLanguage } from "@/contexts/language-context"
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
  const { setNavigatedInternally } = useNavigationAnimation()
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigationClick = () => {
    setNavigatedInternally()
    setIsOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <div className="md:hidden flex items-center gap-2">
      <Link
        href="/"
        className="text-foreground hover:text-primary transition-colors p-2"
        onClick={setNavigatedInternally}
      >
        <House className="h-5 w-5" />
      </Link>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Navigate to different sections
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            <button
              onClick={toggleLanguage}
              className="text-sm flex items-center gap-1 w-fit"
            >
              <span className={language === "en" ? "text-foreground font-semibold" : "text-muted-foreground"}>
                EN
              </span>
              <span className="text-muted-foreground">|</span>
              <span className={language === "es" ? "text-foreground font-semibold" : "text-muted-foreground"}>
                ES
              </span>
            </button>
            
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={handleNavigationClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
} 
