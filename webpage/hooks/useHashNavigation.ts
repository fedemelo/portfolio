"use client"

import { useEffect, useState } from "react"

/**
 * Hook to handle URL hash-based navigation and auto-scrolling
 * @returns The target hash (without #) from the URL
 */
export function useHashNavigation() {
  const [targetHash, setTargetHash] = useState<string | null>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTargetHash(hash)
      
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)  // Small delay to ensure DOM is ready
    }
  }, [])

  return targetHash
}
