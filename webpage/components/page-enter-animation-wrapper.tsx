"use client"

import { usePathname } from "next/navigation"
import { useRef, useEffect, type ReactNode } from "react"
import { PageEnterAnimation } from "./page-enter-animation"
import { navigationItems } from "./navigation/navigation-items"

const ROUTE_ORDER = ["/", ...navigationItems.map(item => `${item.href}/`)]

export function PageEnterAnimationWrapper({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  const isFirstRender = useRef(true)

  const prevIndex = ROUTE_ORDER.indexOf(prevPathnameRef.current)
  const currIndex = ROUTE_ORDER.indexOf(pathname)
  const direction = currIndex > prevIndex ? "forward" : "back"
  const skip = isFirstRender.current

  useEffect(() => {
    isFirstRender.current = false
    prevPathnameRef.current = pathname
  }, [pathname])

  return (
    <PageEnterAnimation key={pathname} direction={direction} skip={skip}>
      {children}
    </PageEnterAnimation>
  )
}
