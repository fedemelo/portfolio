"use client"

import { useEducation } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { EducationItem } from "./components/education-item"
import { EducationLoadingSkeleton } from "./components/education-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { generateSlug } from "@/utils/slug"

export default function EducationPage() {
  const { data: education, loading, error } = useEducation()
  const targetHash = useHashNavigation()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Education" downloadButtons />
      <TimelineLayout
        items={education}
        loading={loading}
        error={error}
        renderItem={(edu) => {
          const slug = generateSlug(edu.degree)
          const shouldExpand = slug === targetHash
          return <EducationItem education={edu} defaultExpanded={shouldExpand} />
        }}
        getIcon={(edu) => <OrganizationIcon organization={edu.organization} />}
        LoadingSkeleton={EducationLoadingSkeleton}
        pageName="education"
        itemName="education"
      />
    </div>
  )
}
