import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  tooltip?: string
}

export function GreenButton({ children, asChild, tooltip, ...props }: GreenButtonProps) {
  
  // Use custom tooltips because Shadcn's Tooltip component
  // shows on auto-focus when opening modals
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showTooltip && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setTooltipPosition({
        top: rect.top + window.scrollY - 8,
        left: rect.left + rect.width / 2,
      })
    }
  }, [showTooltip])

  const button = (
    <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10" asChild={asChild} {...props}>
      {children}
    </Button>
  )

  if (tooltip) {
    return (
      <div 
        ref={buttonRef}
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {button}
        {mounted && showTooltip && createPortal(
          <div 
            className="fixed px-3 py-1.5 text-sm text-popover-foreground bg-popover border border-border rounded-md shadow-md whitespace-nowrap z-[9999] animate-in fade-in-0 zoom-in-95 -translate-x-1/2 -translate-y-full"
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            {tooltip}
          </div>,
          document.body
        )}
      </div>
    )
  }

  return button
}