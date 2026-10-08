"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { useTranslation } from "@/hooks/useTranslation"

export function RecruiterSection() {
  const t = useTranslation()

  return (
    <section id="recruiter" className="py-24 px-8 md:px-16 max-w-4xl mx-auto">
      <div className="space-y-10">
        <PageHeader title={t.recruiter.title} downloadButtons />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoleCard
            type={t.recruiter.industryType}
            role={t.recruiter.industryRole}
            org={t.recruiter.industryOrg}
            description={t.recruiter.industryDescription}
            href="https://canals.ai"
          />
          <RoleCard
            type={t.recruiter.academicType}
            role={t.recruiter.academicRole}
            org={t.recruiter.academicOrg}
            description={t.recruiter.academicDescription}
            href="https://uniandes.edu.co"
          />
        </div>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/work-experience"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t.recruiter.workExperience}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link
            href="/education"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t.recruiter.education}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function RoleCard({
  type, role, org, description, href,
}: {
  type: string
  role: string
  org: string
  description: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border rounded-lg hover:border-primary transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
          {type}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <h3 className="font-semibold font-display mb-1">{role}</h3>
      <p className="text-sm text-muted-foreground">{org}</p>
      <p className="text-xs text-muted-foreground mt-2">{description}</p>
    </a>
  )
}
