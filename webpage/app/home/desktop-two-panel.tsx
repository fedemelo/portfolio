"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function DesktopTwoPanel() {
  const [isVisible, setIsVisible] = useState(false)
  const { setHomeAnimationComplete } = useNavigationAnimation()

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    const completeTimer = setTimeout(() => {
      setHomeAnimationComplete()
    }, 900)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(completeTimer)
    }
  }, [setHomeAnimationComplete])

  return (
    <div
      className="mt-12 grid grid-cols-5 gap-6 transition-all duration-500 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="col-span-3 border-l-2 border-primary pl-4">
        <h2 className="font-display font-semibold text-foreground">Currently</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Building the parsing pipeline at Canals AI.
        </p>
        <Link
          href="/work-experience"
          className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2"
        >
          Work Experience
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      <Card className="col-span-2 border-primary/20 bg-card">
        <CardContent className="pt-4">
          <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 w-fit inline-block">
            Para mis estudiantes
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Encuentra examenes pasados, laboratorios y material de tus cursos.
          </p>
          <Link
            href="/courses"
            className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2"
          >
            Courses
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
