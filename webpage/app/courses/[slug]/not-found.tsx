"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function NotFound() {
  const t = useTranslation()

  return (
    <div className="max-w-4xl mx-auto py-16 text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{t.pages.course.notFoundTitle}</h1>
        <p className="text-lg text-muted-foreground">
          {t.pages.course.notFoundDescription}
        </p>
      </div>
      
      <Link
        href="/teaching"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.pages.course.backToTeaching}
      </Link>
    </div>
  )
}

