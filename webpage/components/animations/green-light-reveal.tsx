"use client"

import { useState, useCallback } from "react"
import styles from "./green-light-reveal.module.css"

interface GreenLightRevealProps {
  onSpreadComplete?: () => void
  onComplete?: () => void
}

export function GreenLightReveal({ onSpreadComplete, onComplete }: GreenLightRevealProps) {
  const [phase, setPhase] = useState<"spreading" | "fading" | "done">("spreading")

  const handleAnimationEnd = useCallback(() => {
    setPhase("fading")
    onSpreadComplete?.()
  }, [onSpreadComplete])

  const handleTransitionEnd = useCallback(() => {
    setPhase("done")
    onComplete?.()
  }, [onComplete])

  if (phase === "done") return null

  return (
    <div
      className={`${styles.overlay} ${phase === "fading" ? styles.fading : ""}`}
      onAnimationEnd={handleAnimationEnd}
      onTransitionEnd={handleTransitionEnd}
    />
  )
}
