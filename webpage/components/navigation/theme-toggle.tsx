"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/hooks/useTranslation"

export function ThemeToggle() {
  const { setTheme, resolvedTheme, systemTheme } = useTheme()
  const t = useTranslation()

  const handleThemeToggle = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    // Choosing the system's own mode resets to "system" so a stale override never outlives a preference change
    setTheme(nextTheme === systemTheme ? "system" : nextTheme)
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeToggle}>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{t.common.toggleTheme}</span>
    </Button>
  )
} 