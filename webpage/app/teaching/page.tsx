"use client"

import { useTeaching } from "@/hooks/useApiData"
import { TeachingItem } from "./components/teaching-item"
import { TeachingLoadingSkeleton } from "./components/teaching-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"

export default function TeachingPage() {
  const { data: teaching, loading, error } = useTeaching()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Teaching" subtitle="Educational roles and contributions to academic institutions." />
      <TimelineLayout
        items={teaching}
        loading={loading}
        error={error}
        renderItem={(experience) => <TeachingItem teaching={experience} />}
        getIcon={(experience) => (
          <OrganizationIcon organization={experience.organization} />
        )}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName="teaching experience"
        itemName="teaching experience"
      />
    </div>
  )
}
