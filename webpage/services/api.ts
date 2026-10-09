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
  Course,
  AwardReference,
} from '@/types'
import { generateSlug } from '@/utils/slug'

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
import { COURSES } from '../../shared/data/courses'

import { 
  getLocalizedText, 
  getCVText, 
  getOrgName,
} from '../../shared/utils/localization'
import type { Language as LanguageCode } from '../../shared/schemas/utils'
import type { Organization } from '../../shared/schemas/organization'

// The shared data writes every date in Colombian time (-05:00, no DST), sometimes in the evening, so its UTC day can be the next one
const DATA_TIME_ZONE = 'America/Bogota'

const dateToString = (date: Date | undefined): string | undefined => {
  return date ? date.toLocaleDateString('en-CA', { timeZone: DATA_TIME_ZONE }) : undefined
}

const localizeOrganization = (organization: Organization, language: LanguageCode): Organization => ({
  ...organization,
  name: getOrgName(organization, language),
})

// Anchors come from the English title so shared links open the same entry in every language, and links shared before the site was translated keep working
const toAnchor = (englishTitle: string): string => generateSlug(englishTitle)

// Education references awards by their English title; the website needs the title it renders to show it, and the award's anchor to link to it
const toAwardReference = (englishTitle: string, language: LanguageCode): AwardReference => {
  const award = AWARDS.find(award => award.title.en === englishTitle)
  return {
    title: award ? getLocalizedText(award.title, language) : englishTitle,
    anchor: toAnchor(englishTitle),
  }
}

const onlyShownInWebsite = <T extends { showInWebsite?: boolean }>(items: readonly T[]): T[] =>
  items.filter(item => item.showInWebsite !== false)

const convertEducation = (data: typeof EDUCATION, language: LanguageCode): Education[] => {
  return data.map(item => ({
    ...item,
    degree: getLocalizedText(item.degree, language),
    anchor: toAnchor(item.degree.en),
    organization: localizeOrganization(item.organization, language),
    relatedAwards: item.relatedAwardTitles?.map(title => toAwardReference(title, language)),
    details: item.details?.filter(d => d.showInWebsite !== false).map(detail => getCVText(detail, language)),
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
    anchor: toAnchor(item.title.en),
    organization: localizeOrganization(item.organization, language),
    team: item.team ? getLocalizedText(item.team, language) : undefined,
    squad: item.squad ? getLocalizedText(item.squad, language) : undefined,
    details: item.details?.map(detail => getCVText(detail, language)),
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
  }))
}

const convertTeaching = (data: typeof TEACHING, language: LanguageCode): Teaching[] => {
  return data.map(item => ({
    ...item,
    title: getLocalizedText(item.title, language),
    anchor: toAnchor(item.title.en),
    organization: localizeOrganization(item.organization, language),
    description: item.description ? getCVText(item.description, language) : undefined,
    achievements: item.achievements?.map(achievement => getCVText(achievement, language)),
    startDate: dateToString(item.startDate) || '',
    endDate: dateToString(item.endDate),
  }))
}

const convertCourses = (data: typeof COURSES, language: LanguageCode): Course[] => {
  return data.map(item => ({
    ...item,
    name: getLocalizedText(item.name, language),
    organization: localizeOrganization(item.organization, language),
    department: item.department ? getLocalizedText(item.department, language) : undefined,
    description: item.description ? getCVText(item.description, language) : undefined,
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
    anchor: toAnchor(item.title.en),
    description: getCVText(item.description, language),
    organization: localizeOrganization(item.organization, language),
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
    anchor: toAnchor(item.title.en),
    citation: {
      title: item.title.en,
      venue: item.description.en.full,
      note: item.note?.en,
    },
    description: getCVText(item.description, language),
    linkText: item.linkText ? getLocalizedText(item.linkText, language) : undefined,
    year: String(item.year),
    showInCV: item.showInCV ?? true,
    showInResume: item.showInResume ?? true,
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
      department: course.department ? getLocalizedText(course.department, language) : undefined,
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
    return convertEducation(onlyShownInWebsite(EDUCATION), language)
  }

  getWorkExperience = async (language: LanguageCode = 'en'): Promise<WorkExperience[]> => {
    return convertWorkExperience(onlyShownInWebsite(WORK_EXPERIENCE), language)
  }

  getLanguages = async (language: LanguageCode = 'en'): Promise<Language[]> => {
    return convertLanguages(onlyShownInWebsite(LANGUAGES), language)
  }

  getAwards = async (language: LanguageCode = 'en'): Promise<Award[]> => {
    return convertAwards(onlyShownInWebsite(AWARDS), language)
  }

  getRelevantCoursework = async (language: LanguageCode = 'en'): Promise<RelevantCoursework[]> => {
    return convertRelevantCoursework(onlyShownInWebsite(RELEVANT_COURSEWORK), language)
  }

  getResearchInterests = async (language: LanguageCode = 'en'): Promise<ResearchInterest[]> => {
    return [{
      text: getCVText(RESEARCH_INTERESTS.text, language),
      showInCV: RESEARCH_INTERESTS.showInCV ?? true,
    }]
  }

  getTeaching = async (language: LanguageCode = 'en'): Promise<Teaching[]> => {
    return convertTeaching(onlyShownInWebsite(TEACHING), language)
  }

  getExtracurricular = async (language: LanguageCode = 'en'): Promise<Extracurricular[]> => {
    return convertExtracurricular(onlyShownInWebsite(EXTRACURRICULARS), language)
  }

  getPersonalInfo = async (language: LanguageCode = 'en'): Promise<PersonalInfo[]> => {
    // Personal info doesn't need localization as it's contact information
    return [PERSONAL_INFO]
  }

  getPublications = async (language: LanguageCode = 'en'): Promise<Publication[]> => {
    return convertPublications(onlyShownInWebsite(PUBLICATIONS), language)
  }

  getCourses = async (language: LanguageCode = 'en'): Promise<Course[]> => {
    return convertCourses(onlyShownInWebsite(COURSES), language)
  }

  getHealth = async (): Promise<{ status: string; timestamp: string }> => {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString()
    }
  }
}

export const apiClient = new StaticDataClient()