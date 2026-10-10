"use client"

import { Trophy, ExternalLink } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import type { AwardReference } from "@/types"

interface AwardReferencesProps {
  awards: AwardReference[]
}

export function AwardReferences({ awards }: AwardReferencesProps) {
  const t = useTranslation()

  if (!awards || awards.length === 0) return null

  const uniqueAwards = awards.reduce((acc, award) => {
    const existing = acc.find(unique => unique.anchor === award.anchor)
    if (existing) existing.count++
    else acc.push({ ...award, count: 1 })
    return acc
  }, [] as (AwardReference & { count: number })[])

  return (
    <div className="mt-4 pt-4 border-t">
      <h4 className="text-sm font-medium text-muted-foreground mb-3">
        {t.pages.education.awardReferences} ({awards.length})
      </h4>
      <div className="flex flex-wrap gap-2">
        {uniqueAwards.map(({ title, anchor, count }) => {
          // A plain same-page hash link fires hashchange, which Next's Link does not
          return (
            <a
              key={anchor}
              href={`#${anchor}`}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <Trophy className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{title}</span>
              {count > 1 && (
                <span className="text-xs text-muted-foreground font-medium">
                  × {count}
                </span>
              )}
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

