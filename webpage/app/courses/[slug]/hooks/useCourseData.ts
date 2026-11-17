"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import type { Course, Teaching } from "@/types"
import { apiClient } from "@/services/api"
import { useLanguage } from "@/contexts/language-context"

const sortTeachingsByDate = (teachings: Teaching[]) => 
  teachings.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    return dateB - dateA
  })

export function useCourseData(slug: string) {
  const [course, setCourse] = useState<Course | null>(null)
  const [teachings, setTeachings] = useState<Teaching[]>([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        const courses = await apiClient.getCourses(language)
        const foundCourse = courses.find(c => c.slug === slug)
        
        if (!foundCourse || !foundCourse.hasPage) {
          notFound()
        }
        
        setCourse(foundCourse)
        
        const allTeachings = await apiClient.getTeaching(language)
        const relatedTeachings = allTeachings.filter(t => 
          foundCourse.teachingIds.includes(t.id)
        )
        
        setTeachings(sortTeachingsByDate(relatedTeachings))
      } catch (error) {
        console.error('Error fetching course data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug, language])

  return { course, teachings, loading }
}

