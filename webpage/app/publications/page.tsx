"use client"

import { usePublications } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { PublicationsList } from "./components/publications-list"
import { PageHeader } from "@/components/page-header"

export default function PublicationsPage() {
  const { data: publications, loading, error } = usePublications()
  const targetHash = useHashNavigation()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Publications" subtitle="Research papers and academic contributions." />
      <PublicationsList publications={publications} loading={loading} error={error} targetHash={targetHash} />
    </div>
  )
}
