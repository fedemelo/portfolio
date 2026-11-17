"use client"

import type { MouseEvent } from "react"
import { useRouter } from "next/navigation"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function useNavigateWithSlide() {
  const router = useRouter()
  const { setNavigatedInternally } = useNavigationAnimation()

  return function navigate(href: string) {
    setNavigatedInternally()
    router.push(href)
  }
}

function opensElsewhere(e: MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0
}

export function useSlideLinkClick() {
  const navigate = useNavigateWithSlide()

  return function followLink(e: MouseEvent, href: string) {
    if (opensElsewhere(e)) return
    e.preventDefault()
    navigate(href)
  }
}
