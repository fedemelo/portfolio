import type { Award } from "@/types"

/**
 * Expands awards with multiple instances into individual award items
 * and sorts them chronologically (most recent first)
 */
export function expandAndSortAwards(awards: Award[]): Award[] {
  const expandedAwards: Award[] = []

  awards.forEach((award) => {
    if (award.instances && award.instances.length > 0) {
      // Create a separate award for each instance
      award.instances.forEach((instance) => {
        expandedAwards.push({
          ...award,
          // Combine general description with instance-specific description
          description: `${award.description}\n\n${instance.description}`,
          date: instance.date,
          // Use instance-specific credentials if available, otherwise fall back to award-level
          certificateUrl: instance.certificateUrl || award.certificateUrl,
          images: instance.images || award.images,
          instances: undefined, // Remove instances from expanded awards
        })
      })
    } else {
      // Keep awards without instances as is
      expandedAwards.push(award)
    }
  })

  // Sort by date (most recent first)
  return expandedAwards.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

