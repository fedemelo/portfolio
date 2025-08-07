import { UNIANDES } from "./constants";
import type { Teaching } from "../schemas/teaching";

export const TEACHING: Teaching[] = [
  {
    title: {
      en: "Lecturer",
      es: "Profesor"
    },
    course: {
      name: {
        en: "Introduction to Programming",
        es: "Introducción a la Programación"
      },
      originalName: "Introducción a la Programación",
      code: "ISIS-1221",
      credits: 3,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    startDate: new Date("2025-08-04T12:00:00-05:00"),
    achievements: [
      {
        en: {
          full: "Taught a 25-student undergraduate course covering core procedural programming concepts: variables, control flow, functions, data structures, and matrix operations using Python libraries (e.g., matplotlib, pandas)",
          short: "Taught fundamental procedural programming in Python to ~25 students, covering pandas and matplotlib"
        },
      },
      {
        en: {
          full: "Exceptionally selected to teach the course, typically reserved for faculty with graduate degrees",
        },
      },
    ],
    isCurrent: true,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Undergraduate Research Teaching Assistant",
      es: "Asistente de Investigación"
    },
    course: {
      name: {
        en: "CupiTaller",
        es: "CupiTaller"
      },
      originalName: "CupiTaller",
      code: "VICE-3001",
      credits: 6,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    startDate: new Date("2022-08-08T12:00:00-05:00"),
    endDate: new Date("2024-12-07T12:00:00-05:00"),
    supervisor: "Prof. Eduardo Rosales, Ph.D.",
    description: {
      en: {
        full: "Collaborated in a 7-person team under Prof. Eduardo Rosales, Ph.D., to manage the university's programming support center",
      },
    },
    achievements: [
      {
        en: {
          full: "Oversaw the university's Coursera courses 'Programming in Python' and 'Introduction to Object Oriented Programming in Java', which have 50,000+ and 60,000+ historical enrollments respectively",
          short: "Oversaw Coursera courses with 50,000+ and 60,000+ historical enrollments"
        },
      },
      {
        en: {
          full: "Managed schedules for ~40 tutors and ~70 TAs each semester, overseeing a system that enabled 1,500+ students to book tutoring sessions",
          short: "Managed schedules for ~40 tutors and ~70 TAs each semester. Oversaw system that enabled 1,500+ students to book tutoring sessions"
        },
      },
      {
        en: {
          full: "Designed and co-built CupiHorarios, a scheduling web app (FastAPI, React) leveraging Pyomo (a constraint satisfaction optimization solver) to generate  schedules that ensured full coverage during operational hours",
        },
      },
      {
        en: {
          full: "Co-designed and co-built CupiFeedback, a tutoring performance analytics web app (FastAPI, React) that collected feedback from 1,500+ students and presented insights through interactive visualizations",
        },
      },
      {
        en: {
          full: "Co-designed CupiMonitores, a web app that centralized TA evaluation, which was ultimately adopted university-wide",
        },
      },
      {
        en: {
          full: "Developed automation systems including a TypeScript Discord bot for remote tutoring tracking and programming problems with automated solution verification",
        },
      },
      {
        en: {
          full: "Led tutor recruitment and training processes, conducting candidate interviews and occasionally providing coverage during tutor absences, teaching data structures and algorithms concepts",
        },
      },
    ],
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    course: {
      name: {
        en: "Vector Calculus",
        es: "Cálculo Vectorial"
      },
      originalName: "Cálculo Vectorial",
      code: "MATE-1207",
      credits: 3,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Mathematics",
      es: "Matemáticas"
    },
    startDate: new Date("2024-06-04T12:00:00-05:00"),
    endDate: new Date("2024-07-26T12:00:00-05:00"),
    supervisor: "Prof. Jacinto Puig, Ph.D.",
    achievements: [
      {
        en: {
          full: "Designed and graded problem sets, and conducted weekly office hours",
        },
      },
      {
        en: {
          full: "Covered partial derivatives, double and triple integrals, line and surface integrals, vector fields, curl and divergence calculations, and the fundamental theorems (Green's, Stokes', and Gauss')",
        },
      },
      {
        en: {
          full: "Helped students apply these concepts to real-world problems, mainly involving constrained and unconstrained optimization",
        },
      },
    ],
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Tutor",
      es: "Tutor"
    },
    course: {
      name: {
        en: "CupiTaller",
        es: "CupiTaller"
      },
      originalName: "CupiTaller",
      code: "ISIS-1211",
      credits: 3,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    startDate: new Date("2022-02-01T12:00:00-05:00"),
    endDate: new Date("2022-06-04T12:00:00-05:00"),
    achievements: [
      {
        en: {
          full: "Conducted Python tutoring sessions, overall assisting 100+ students",
        },
      },
      {
        en: {
          full: "Guided students through problems involving classic data structures (arrays, linked lists, trees, tries, hash maps, graphs) and algorithmic problem-solving techniques",
        },
      },
    ],
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    course: {
      name: {
        en: "Introduction to Programming",
        es: "Introducción a la Programación"
      },
      originalName: "Introducción a la Programación",
      code: "ISIS-1221",
      credits: 3,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Systems and Computing Engineering",
      es: "Ingeniería de Sistemas y Computación"
    },
    startDate: new Date("2021-02-01T12:00:00-05:00"),
    endDate: new Date("2021-06-05T12:00:00-05:00"),
    supervisor: "Prof. Diego Salinas",
    achievements: [
      {
        en: {
          full: "Assisted ~25 students with fundamental procedural programming concepts (variables, control structures, functions, data structures) and matrix operations using Python-specific libraries (matplotlib, pandas)",
          short: "Assisted ~25 students with fundamental procedural programming concepts and matrix operations using Python-specific libraries"
        },
      },
      {
        en: {
          full: "Graded programming projects and provided feedback on coding practices and problem-solving approaches",
        },
      },
    ],
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
  {
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    course: {
      name: {
        en: "Differential Calculus",
        es: "Cálculo Diferencial"
      },
      originalName: "Cálculo Diferencial",
      code: "MATE-1203",
      credits: 3,
      showInCV: true,
      showInResume: false,
    },
    department: {
      en: "Mathematics",
      es: "Matemáticas"
    },
    startDate: new Date("2021-01-25T12:00:00-05:00"),
    endDate: new Date("2021-05-29T12:00:00-05:00"),
    supervisor: "Prof. Alexander Murcia, Ph.D.",
    achievements: [
      {
        en: {
          full: "Instructed ~45 students in limits, derivatives, and basic integrals, including applications to optimization problems, area between curves, and volumes of solids",
          short: "Instructed ~45 students in limits, derivatives, and basic integrals"
        },
      },
      {
        en: {
          full: "Graded worksheets and provided individualized support",
        },
      },
    ],
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    ...UNIANDES,
  },
];
