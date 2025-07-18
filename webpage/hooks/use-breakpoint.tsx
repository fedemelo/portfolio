import { useState, useEffect, useRef } from "react"

export function useBreakpoint(breakpoint: number = 767) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const hasInitialized = useRef(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < breakpoint
      
      if (!hasInitialized.current) {
        // First time - set immediately without causing extra re-render
        setIsMobile(mobile)
        hasInitialized.current = true
      } else {
        setIsMobile(prev => prev !== mobile ? mobile : prev)
      }
    }

    checkIsMobile()
    
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Return false as default during hydration to prevent mismatch
  return isMobile ?? false
}
