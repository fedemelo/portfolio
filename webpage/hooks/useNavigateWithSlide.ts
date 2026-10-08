"use client"

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
