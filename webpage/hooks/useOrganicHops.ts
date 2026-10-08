import { useCallback, useEffect, useRef } from "react"

const PAUSE_BETWEEN_HOPS_MS = { min: 1400, max: 4200 }
const HOP_HEIGHT_PX = { min: 8, max: 28 }
const HOP_STAGGER_MS = { min: 0, max: 260 }
const HOP_GROUP_SIZE_WEIGHTS = [0.6, 0.3, 0.1]

function randomBetween({ min, max }: { min: number; max: number }) {
  return min + Math.random() * (max - min)
}

function pickGroupSize(available: number) {
  let roll = Math.random()
  for (let size = 1; size <= HOP_GROUP_SIZE_WEIGHTS.length; size++) {
    roll -= HOP_GROUP_SIZE_WEIGHTS[size - 1]
    if (roll <= 0) return Math.min(size, available)
  }
  return available
}

function pickRandom<T>(items: T[], count: number) {
  const shuffled = [...items].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function hop(element: HTMLElement) {
  const height = randomBetween(HOP_HEIGHT_PX)
  element.animate(
    [
      { transform: "translateY(0)", easing: "cubic-bezier(0.2, 0.7, 0.4, 1)" },
      { transform: `translateY(-${height}px)`, offset: 0.4, easing: "cubic-bezier(0.6, 0, 0.8, 0.3)" },
      { transform: "translateY(0)", offset: 0.75, easing: "ease-out" },
      { transform: `translateY(-${height * 0.15}px)`, offset: 0.87, easing: "ease-in" },
      { transform: "translateY(0)" },
    ],
    { duration: 420 + height * 12, delay: randomBetween(HOP_STAGGER_MS) },
  )
}

function isIdle(element: HTMLElement) {
  return !element.matches(":hover") && element.getAnimations().length === 0
}

export function useOrganicHops() {
  const elements = useRef(new Map<number, HTMLElement>())

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timeout: ReturnType<typeof setTimeout>
    const scheduleNextHops = () => {
      timeout = setTimeout(() => {
        const idle = [...elements.current.values()].filter(isIdle)
        pickRandom(idle, pickGroupSize(idle.length)).forEach(hop)
        scheduleNextHops()
      }, randomBetween(PAUSE_BETWEEN_HOPS_MS))
    }
    scheduleNextHops()
    return () => clearTimeout(timeout)
  }, [])

  return useCallback(
    (index: number) => (element: HTMLElement | null) => {
      if (element) elements.current.set(index, element)
      else elements.current.delete(index)
    },
    [],
  )
}
