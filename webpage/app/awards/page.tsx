"use client"

import { useMemo } from "react"
import { useAwards } from "@/hooks/useApiData"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { AwardItem } from "./components/award-item"
import { AwardsLoadingSkeleton } from "./components/awards-loading-skeleton"
import { expandAndSortAwards } from "./utils/expand-awards"

export default function AwardsPage() {
  const { data: awards, loading, error } = useAwards()
  
  const expandedAwards = useMemo(() => expandAndSortAwards(awards), [awards])

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Awards & Recognition" subtitle="Honors, achievements, and recognition received throughout my academic and professional career." />
      <TimelineLayout
        items={expandedAwards}
        loading={loading}
        error={error}
        renderItem={(award) => <AwardItem award={award} />}
        getIcon={(award) => <OrganizationIcon organization={award.organization} />}
        LoadingSkeleton={AwardsLoadingSkeleton}
        pageName="awards"
        itemName="awards"
      />
    </div>
  )
}
