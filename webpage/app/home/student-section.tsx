"use client"

import { PageHeader } from "@/components/page-header"
import { useTranslation } from "@/hooks/useTranslation"

export function StudentSection() {
  const t = useTranslation()

  return (
    <section id="student" className="py-24 px-8 md:px-16 max-w-4xl mx-auto">
      <div className="space-y-8">
        <PageHeader title={t.student.title} />
        <p className="text-muted-foreground">{t.student.placeholder}</p>
      </div>
    </section>
  )
}
