import { useState, useEffect, useCallback } from 'react'
import { apiClient } from '@/services/api'
import { useLanguage } from '@/contexts/language-context'
import type {
  Education,
  WorkExperience,
  Language,
  Award,
  RelevantCoursework,
  ResearchInterest,
  Teaching,
  Extracurricular,
  PersonalInfo,
  Publication,
} from '@/types'
import type { Language as LanguageCode } from '../../shared/schemas/utils'

export interface UseApiDataReturn<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

interface UseApiDataOptions<T> {
  transform?: (data: T[]) => T[]
}

export function useApiData<T = any>(
  serviceFunction: (language: LanguageCode) => Promise<T[]>,
  options: UseApiDataOptions<T> = {}
): UseApiDataReturn<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()

  const { transform } = options

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      let result = await serviceFunction(language)

      if (transform) result = transform(result)

      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }, [serviceFunction, transform, language])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  }
}

export function useAwards(): UseApiDataReturn<Award> {
  return useApiData(apiClient.getAwards)
}

export function useEducation(): UseApiDataReturn<Education> {
  return useApiData(apiClient.getEducation)
}

export function useWorkExperience(): UseApiDataReturn<WorkExperience> {
  return useApiData(apiClient.getWorkExperience)
}

export function useLanguages(): UseApiDataReturn<Language> {
  return useApiData(apiClient.getLanguages)
}

export function useRelevantCoursework(): UseApiDataReturn<RelevantCoursework> {
  return useApiData(apiClient.getRelevantCoursework)
}

export function useResearchInterests(): UseApiDataReturn<ResearchInterest> {
  return useApiData(apiClient.getResearchInterests)
}

export function useTeaching(): UseApiDataReturn<Teaching> {
  return useApiData(apiClient.getTeaching)
}

export function useExtracurricular(): UseApiDataReturn<Extracurricular> {
  return useApiData(apiClient.getExtracurricular)
}

export function usePersonalInfo(): UseApiDataReturn<PersonalInfo> {
  return useApiData(apiClient.getPersonalInfo)
}

export function usePublications(): UseApiDataReturn<Publication> {
  return useApiData(apiClient.getPublications)
}