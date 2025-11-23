import { UNIANDES } from "./constants";
import type { Course } from "../schemas/course";

export const COURSES: Course[] = [
  {
    code: "ISIS-1221",
    slug: "isis-1221",
    name: {
      en: "Introduction to Programming",
      es: "Introducción a la Programación"
    },
    originalName: "Introducción a la Programación",
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    credits: 3,
    description: {
      en: {
        full: "Fundamental course covering core procedural programming concepts including control flow, functions, data structures, matrix operations, and Python libraries (e.g., matplotlib, pandas).",
      },
    },
    teachingIds: ["isis-1221-2025-20-lecturer", "isis-1221-2021-10-ta"],
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    code: "VICE-3001",
    slug: "vice-3001",
    name: {
      en: "CupiTaller",
      es: "CupiTaller"
    },
    originalName: "CupiTaller",
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    credits: 6,
    description: {
      en: {
        full: "University programming support center providing tutoring for students learning programming.",
      },
    },
    teachingIds: ["vice-3001-2022-2024-assistant"],
    hasPage: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    code: "ISIS-1211",
    slug: "isis-1211",
    name: {
      en: "CupiTaller",
      es: "CupiTaller"
    },
    originalName: "CupiTaller",
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    credits: 3,
    description: {
      en: {
        full: "University programming support center providing tutoring for students learning programming.",
      },
    },
    teachingIds: ["isis-1211-2022-10-tutor"],
    hasPage: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    code: "MATE-1207",
    slug: "mate-1207",
    name: {
      en: "Vector Calculus",
      es: "Cálculo Vectorial"
    },
    originalName: "Cálculo Vectorial",
    department: {
      en: "Mathematics",
      es: "Matemáticas"
    },
    credits: 3,
    description: {
      en: {
        full: "Advanced calculus course covering partial derivatives, double and triple integrals, line and surface integrals, vector fields, curl and divergence calculations, and the fundamental theorems (Green's, Stokes', and Gauss').",
      },
    },
    teachingIds: ["mate-1207-2024-19-ta"],
    hasPage: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    code: "MATE-1203",
    slug: "mate-1203",
    name: {
      en: "Differential Calculus",
      es: "Cálculo Diferencial"
    },
    originalName: "Cálculo Diferencial",
    department: {
      en: "Mathematics",
      es: "Matemáticas"
    },
    credits: 3,
    description: {
      en: {
        full: "Fundamental calculus course covering limits, derivatives, and basic integrals, including applications to optimization problems, area between curves, and volumes of solids.",
      },
    },
    teachingIds: ["mate-1203-2021-10-ta"],
    hasPage: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
];

