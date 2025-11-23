"use client"

import { Trophy, ExternalLink } from "lucide-react"
import Link from "next/link"
import { generateSlug } from "@/utils/slug"

interface AwardReferencesProps {
  awardTitles: string[]
}

export function AwardReferences({ awardTitles }: AwardReferencesProps) {
  if (!awardTitles || awardTitles.length === 0) return null

  const awardCounts = awardTitles.reduce((acc, title) => {
    acc[title] = (acc[title] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const uniqueAwards = Object.entries(awardCounts).map(([title, count]) => ({
    title,
    count,
  }))

  return (
    <div className="mt-4 pt-4 border-t">
      <h4 className="text-sm font-medium text-muted-foreground mb-3">
        Honors & Awards ({awardTitles.length})
      </h4>
      <div className="flex flex-wrap gap-2">
        {uniqueAwards.map(({ title, count }) => {
          const slug = generateSlug(title)
          return (
            <Link
              key={title}
              href={`/awards#${slug}`}
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
            </Link>
          )
        })}
      </div>
    </div>
  )
}

