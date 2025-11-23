"use client"

import { useWorkExperience } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { ExperienceItem } from "./components/experience-item"
import { ExperienceLoadingSkeleton } from "./components/experience-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { generateSlug } from "@/utils/slug"

export default function WorkExperiencePage() {
  const { data: experiences, loading, error } = useWorkExperience()
  const targetHash = useHashNavigation()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Work Experience" downloadButtons />
      <TimelineLayout
        items={experiences}
        loading={loading}
        error={error}
        renderItem={(experience) => {
          const slug = generateSlug(experience.title)
          const shouldExpand = slug === targetHash
          return <ExperienceItem experience={experience} defaultExpanded={shouldExpand} />
        }}
        getIcon={(experience) => (
          <OrganizationIcon organization={experience.organization} />
        )}
        LoadingSkeleton={ExperienceLoadingSkeleton}
        pageName="work experience"
        itemName="work experience"
      />
    </div>
  )
}
