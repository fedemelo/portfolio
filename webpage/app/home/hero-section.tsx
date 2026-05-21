"use client"

import { useEffect, useRef } from "react"
import type { PersonalInfo } from "@/types"
import { OpenCVOrResume } from "@/components/open-cv-or-resume"
import { SocialLinks } from "./social-links"
import { useTheme } from "next-themes"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const CanalsAI = (
  <a
    href="https://canals.ai"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
    style={{
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      color: "rgb(40, 84, 246)",
    }}
  >
    Canals AI
  </a>
)

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  const Uniandes = (
    <a
      href="https://uniandes.edu.co"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{
        fontFamily: '"Barlow Semi Condensed", sans-serif',
        fontWeight: 500,
        color: isDark ? "white" : "black"
      }}
    >
      Universidad de los Andes
    </a>
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    const PARTICLE_COUNT = 60
    const CONNECTION_DISTANCE = 120

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        })
      }
    }

    const isLightMode = resolvedTheme === "light"
    const particleOpacity = isLightMode ? 0.3 : 0.5
    const lineOpacity = isLightMode ? 0.12 : 0.2

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(142, 76%, 36%, ${particleOpacity})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(142, 76%, 36%, ${lineOpacity})`
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
    })
    resizeObserver.observe(canvas.parentElement!)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      resizeObserver.disconnect()
    }
  }, [resolvedTheme])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      />
      <div className="space-y-5 lg:pt-12">
        <h1 className="text-4xl md:text-7xl tracking-tight">
          {personalInfo.name}
        </h1>
        <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between">
          <OpenCVOrResume />
          <SocialLinks personalInfo={personalInfo} />
        </div>
        <div className="space-y-0">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-display font-light text-justify w-full">
            Shipping AI and teaching code.
          </p>
          <p className="text-base md:text-xl text-muted-foreground font-display font-light text-justify w-full">
            Software engineer on the Parsing team at {CanalsAI}, lecturer at {Uniandes}.
          </p>
        </div>
      </div>
    </div>
  )
} 
