"use client"

import { useWorkExperience } from "@/hooks/useApiData"
import { ExperienceItem } from "./components/experience-item"
import { ExperienceLoadingSkeleton } from "./components/experience-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"

export default function WorkExperiencePage() {
  const { data: experiences, loading, error } = useWorkExperience()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Work Experience" downloadButtons />
      <TimelineLayout
        items={experiences}
        loading={loading}
        error={error}
        renderItem={(experience) => <ExperienceItem experience={experience} />}
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
