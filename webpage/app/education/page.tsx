"use client"

import { useMemo } from "react"
import { useEducation, useAwards, usePublications } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { EducationItem } from "./components/education-item"
import { EducationLoadingSkeleton } from "./components/education-loading-skeleton"
import { AwardItem } from "../awards/components/award-item"
import { AwardsLoadingSkeleton } from "../awards/components/awards-loading-skeleton"
import { expandAndSortAwards } from "../awards/utils/expand-awards"
import { PublicationsList } from "../publications/components/publications-list"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { useTranslation } from "@/hooks/useTranslation"

export default function EducationPage() {
  const { data: education, loading: eduLoading, error: eduError } = useEducation()
  const { data: awards, loading: awardsLoading, error: awardsError } = useAwards()
  const { data: publications, loading: pubsLoading, error: pubsError } = usePublications()
  const targetHash = useHashNavigation()
  const t = useTranslation()

  const expandedAwards = useMemo(() => expandAndSortAwards(awards), [awards])

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="space-y-8">
        <PageHeader title={t.pages.education.title} downloadButtons />
        <TimelineLayout
          items={education}
          loading={eduLoading}
          error={eduError}
          renderItem={(edu) => (
            <EducationItem
              education={edu}
              defaultExpanded={edu.anchor === targetHash}
            />
          )}
          getIcon={(edu) => <OrganizationIcon organization={edu.organization} />}
          LoadingSkeleton={EducationLoadingSkeleton}
          pageName={t.itemNames.education}
          itemName={t.itemNames.education}
        />
      </section>

      <section className="space-y-8">
        <PageHeader
          title={t.pages.awards.title}
          subtitle={t.pages.awards.subtitle}
        />
        <TimelineLayout
          items={expandedAwards}
          loading={awardsLoading}
          error={awardsError}
          renderItem={(award) => (
            <AwardItem
              award={award}
              defaultExpanded={award.anchor === targetHash}
            />
          )}
          getIcon={(award) => <OrganizationIcon organization={award.organization} />}
          LoadingSkeleton={AwardsLoadingSkeleton}
          pageName={t.itemNames.awards}
          itemName={t.itemNames.awards}
        />
      </section>

      <section className="space-y-8">
        <PageHeader title={t.pages.publications.title} subtitle={t.pages.publications.subtitle} />
        <PublicationsList
          publications={publications}
          loading={pubsLoading}
          error={pubsError}
          targetHash={targetHash}
        />
      </section>
    </div>
  )
}
