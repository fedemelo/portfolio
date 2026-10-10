"use client"

import { usePathname } from "next/navigation"
import { useRef, useEffect, type ReactNode } from "react"
import { PageEnterAnimation } from "./page-enter-animation"
import { navigationItems } from "./navigation/navigation-items"

// Course pages open from Teaching, so they sit right after it
const ROUTE_ORDER = ["/", ...navigationItems.map(item => `${item.href}/`), "/courses/"]

function routeIndex(pathname: string) {
  for (let index = ROUTE_ORDER.length - 1; index >= 0; index--) {
    if (pathname.startsWith(ROUTE_ORDER[index])) return index
  }
  return 0
}

export function PageEnterAnimationWrapper({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  const isFirstRender = useRef(true)

  const prevIndex = routeIndex(prevPathnameRef.current)
  const currIndex = routeIndex(pathname)
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
