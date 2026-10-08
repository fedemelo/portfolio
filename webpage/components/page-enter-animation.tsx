"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface PageEnterAnimationProps {
  children: ReactNode
  direction: "forward" | "back"
  skip?: boolean
}

export function PageEnterAnimation({ children, direction, skip }: PageEnterAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (skip) return
    const el = ref.current
    if (!el) return
    const cls = direction === "forward" ? "page-slide-from-right" : "page-slide-from-left"
    el.classList.add(cls)
    const onEnd = () => el.classList.remove(cls)
    el.addEventListener("animationend", onEnd, { once: true })
    return () => el.removeEventListener("animationend", onEnd)
  }, [direction, skip])

  return <div ref={ref}>{children}</div>
}
