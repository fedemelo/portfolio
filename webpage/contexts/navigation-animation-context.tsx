"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useBreakpoint } from '@/hooks/use-breakpoint'

interface NavigationAnimationContextType {
  shouldShowNavigation: boolean
  setHomeAnimationComplete: () => void
  shouldRunNavBarAnimation: boolean
  setNavigatedInternally: () => void
  skipHeroAnimation: boolean
}

const NavigationAnimationContext = createContext<NavigationAnimationContextType | undefined>(undefined)

export function NavigationAnimationProvider({ children }: { children: ReactNode }) {
  const [shouldShowNavigation, setShouldShowNavigation] = useState(false)
  const [shouldRunNavBarAnimation, setShouldRunNavBarAnimation] = useState(true)
  const [navigatedInternally, setNavigatedInternallyState] = useState(false)
  const [skipHeroAnimation, setSkipHeroAnimation] = useState(false)
  const pathname = usePathname()
  const isPhone = useBreakpoint()

  useEffect(() => {
    const isHomePage = pathname === '/'

    if (isHomePage) {
      if (navigatedInternally || isPhone) {
        setShouldShowNavigation(true)
        setShouldRunNavBarAnimation(false)
        setSkipHeroAnimation(true)
      } else {
        setShouldShowNavigation(false)
        setShouldRunNavBarAnimation(true)
        setSkipHeroAnimation(false)
      }
      setNavigatedInternallyState(false)
    } else {
      setShouldShowNavigation(true)
      setShouldRunNavBarAnimation(false)
    }
  }, [pathname, isPhone])

  const setHomeAnimationComplete = () => {
    if (shouldRunNavBarAnimation) setShouldShowNavigation(true)
  }

  const setNavigatedInternally = () => { setNavigatedInternallyState(true) }

  return (
    <NavigationAnimationContext.Provider value={{
      shouldShowNavigation,
      setHomeAnimationComplete,
      shouldRunNavBarAnimation,
      setNavigatedInternally,
      skipHeroAnimation,
    }}>
      {children}
    </NavigationAnimationContext.Provider>
  )
}

export function useNavigationAnimation() {
  const context = useContext(NavigationAnimationContext)
  if (context === undefined) throw new Error('useNavigationAnimation must be used within a NavigationAnimationProvider')
  return context
}
