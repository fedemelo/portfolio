// This was formerly an axios client that fetched data from the API.
// Now it's just a static client that fetches data from the static data files.
// It still provides the original interface of async getters for the 
// data to allow for future dynamic data.
// This is the single connection point to the rest of the monorepo - other
// modules should not import from the shared data directory directly.

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

import { EDUCATION } from '../../shared/data/education'
import { WORK_EXPERIENCE } from '../../shared/data/workExperience'
import { LANGUAGES } from '../../shared/data/languages'
import { AWARDS } from '../../shared/data/awards'
import { RELEVANT_COURSEWORK } from '../../shared/data/relevantCoursework'
import { RESEARCH_INTERESTS } from '../../shared/data/researchInterests'
import { TEACHING } from '../../shared/data/teaching'
import { EXTRACURRICULARS } from '../../shared/data/extracurricular'
import { PERSONAL_INFO } from '../../shared/data/personalInfo'
import { PUBLICATIONS } from '../../shared/data/publications'

import { 
  getLocalizedText, 
  getCVText, 
} from '../../shared/utils/localization'
import type { Language as LanguageCode } from '../../shared/schemas/utils'

const dateToString = (date: Date | undefined): string | undefined => {
  return date ? date.toISOString().split('T')[0] : undefined
}

const convertEducation = (data: typeof EDUCATION, language: LanguageCode): Education[] => {
  return data.map(item => ({
    ...item,
    degree: getLocalizedText(item.degree, language),
    honors: item.honors ? getLocalizedText(item.honors, language) : undefined,
    details: item.details?.map(detail => getCVText(detail, language)),
    startDate: dateToString(item.startDate),
    graduationDate: dateToString(item.graduationDate),
    trueEndDate: dateToString(item.trueEndDate),
    course: item.course ? {
      ...item.course,
      name: getLocalizedText(item.course.name, language),
      description: item.course.description ? getCVText(item.course.description, language) : undefined,
    } : undefined,
  }))
}

const convertWorkExperience = (data: typeof WORK_EXPERIENCE, language: LanguageCode): WorkExperience[] => {
  return data.map(item => ({
    ...item,
    title: getLocalizedText(item.title, language),
    team: item.team ? getLocalizedText(item.team, language) : undefined,
    squad: item.squad ? getLocalizedText(item.squad, language) : undefined,
    description: getCVText(item.description, language),
    achievements: item.achievements?.map(achievement => getCVText(achievement, language)),
    responsibilities: item.achievements?.map(achievement => getCVText(achievement, language)) || [getCVText(item.description, language)],
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
  }))
}

const convertTeaching = (data: typeof TEACHING, language: LanguageCode): Teaching[] => {
  return data.map(item => ({
    ...item,
    title: getLocalizedText(item.title, language),
    department: item.department ? getLocalizedText(item.department, language) : '',
    description: item.description ? getCVText(item.description, language) : undefined,
    achievements: item.achievements?.map(achievement => getCVText(achievement, language)),
    responsibilities: item.achievements?.map(achievement => getCVText(achievement, language)) || [],
    course: item.course ? {
      ...item.course,
      name: getLocalizedText(item.course.name, language),
      description: item.course.description ? getCVText(item.course.description, language) : undefined,
    } : undefined,
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
  }))
}

const convertLanguages = (data: typeof LANGUAGES, language: LanguageCode): Language[] => {
  return data.map(item => ({
    ...item,
    name: getLocalizedText(item.name, language),
    proficiency: getLocalizedText(item.proficiency, language),
    certifications: item.certifications?.map(cert => ({
      ...cert,
      name: getLocalizedText(cert.name, language),
      date: dateToString(cert.date) || '',
    })),
  }))
}

const convertAwards = (data: typeof AWARDS, language: LanguageCode): Award[] => {
  return data.map(item => ({
    ...item,
    title: getLocalizedText(item.title, language),
    description: getCVText(item.description, language),
    date: dateToString(item.date),
    instances: item.instances?.map(instance => ({
      ...instance,
      description: getCVText(instance.description, language),
      date: dateToString(instance.date) || '',
    })),
  }))
}

const convertPublications = (data: typeof PUBLICATIONS, language: LanguageCode): Publication[] => {
  return data.map(item => ({
    ...item,
    title: getLocalizedText(item.title, language),
    description: getCVText(item.description, language),
    linkText: item.linkText ? getLocalizedText(item.linkText, language) : undefined,
    year: String(item.year),
    authors: item.authors.map(author => ({
      ...author,
      isUser: author.isUser ?? false,
    })),
  }))
}

const convertRelevantCoursework = (data: typeof RELEVANT_COURSEWORK, language: LanguageCode): RelevantCoursework[] => {
  return data.map(item => ({
    ...item,
    area: getLocalizedText(item.area, language),
    courses: item.courses.map(course => ({
      ...course,
      name: getLocalizedText(course.name, language),
      description: course.description ? getCVText(course.description, language) : undefined,
    })),
  }))
}

const convertExtracurricular = (data: typeof EXTRACURRICULARS, language: LanguageCode): Extracurricular[] => {
  return data.map(item => ({
    ...item,
    description: getCVText(item.description, language),
    events: item.events.map(event => getCVText(event, language)),
  }))
}

class StaticDataClient {

  getEducation = async (language: LanguageCode = 'en'): Promise<Education[]> => {
    return convertEducation(EDUCATION, language)
  }

  getWorkExperience = async (language: LanguageCode = 'en'): Promise<WorkExperience[]> => {
    return convertWorkExperience(WORK_EXPERIENCE, language)
  }

  getLanguages = async (language: LanguageCode = 'en'): Promise<Language[]> => {
    return convertLanguages(LANGUAGES, language)
  }

  getAwards = async (language: LanguageCode = 'en'): Promise<Award[]> => {
    return convertAwards(AWARDS, language)
  }

  getRelevantCoursework = async (language: LanguageCode = 'en'): Promise<RelevantCoursework[]> => {
    return convertRelevantCoursework(RELEVANT_COURSEWORK, language)
  }

  getResearchInterests = async (language: LanguageCode = 'en'): Promise<ResearchInterest[]> => {
    return [{
      text: getCVText(RESEARCH_INTERESTS.text, language),
      showInCV: RESEARCH_INTERESTS.showInCV,
    }]
  }

  getTeaching = async (language: LanguageCode = 'en'): Promise<Teaching[]> => {
    return convertTeaching(TEACHING, language)
  }

  getExtracurricular = async (language: LanguageCode = 'en'): Promise<Extracurricular[]> => {
    return convertExtracurricular(EXTRACURRICULARS, language)
  }

  getPersonalInfo = async (language: LanguageCode = 'en'): Promise<PersonalInfo[]> => {
    // Personal info doesn't need localization as it's contact information
    return [PERSONAL_INFO]
  }

  getPublications = async (language: LanguageCode = 'en'): Promise<Publication[]> => {
    return convertPublications(PUBLICATIONS, language)
  }

  getHealth = async (): Promise<{ status: string; timestamp: string }> => {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString()
    }
  }
}

export const apiClient = new StaticDataClient()