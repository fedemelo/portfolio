import type { Teaching } from "../schemas/teaching";
import { UNIANDES } from "./constants";

export const TEACHING: Teaching[] = [
  {
    id: "isis-2112-2026-20-lecturer",
    showInCV: true,
    showInResume: true,
    isCurrent: true,
    isUpcoming: false,
    type: "professional",
    title: {
      en: "Adjunct Professor",
      es: "Profesor de cátedra"
    },
    courseCode: "ISIS-2112",
    period: "Fall 2026",
    startDate: new Date("2026-08-03T12:00:00-05:00"),
    endDate: new Date("2026-12-05T12:00:00-05:00"),
    achievements: [
      {
        en: {
          full: "Principal instructor for an upper-division algorithm design course, lecturing and designing exams",
        },
      },
      {
        en: {
          full: "Topics: divide and conquer, dynamic programming, graph algorithms, NP-completeness, approximation and randomized algorithms",
        },
      },
    ],
    ...UNIANDES,
    // evaluationPdfUrl: TODO: Add when available
    groupId: "uniandes-adjunct",
  },
  {
    id: "isis-1221-2025-20-lecturer",
    showInCV: true,
    showInResume: true,
    isCurrent: false,
    type: "professional",
    title: {
      en: "Adjunct Professor",
      es: "Profesor de cátedra"
    },
    courseCode: "ISIS-1221",
    period: "Fall 2025, Spring 2026",
    startDate: new Date("2025-08-04T12:00:00-05:00"),
    endDate: new Date("2026-05-29T12:00:00-05:00"),
    description: {
      en: {
        full: "Principal instructor for an introductory undergraduate course in procedural programming using Python",
      },
      showInResume: true,
    },
    achievements: [
      {
        en: {
          full: "Topics: programming fundamentals and the data-processing libraries pandas and Matplotlib",
        },
      }
    ],
    ...UNIANDES,
    evaluationPdfUrl: "/documents/teaching-evaluations/isis-1221-2025-20.pdf",
    groupId: "uniandes-adjunct",
  },
  {
    id: "vice-3001-2022-2024-assistant",
    isCurrent: false,
    showInCV: true,
    showInResume: false,
    type: "undergraduate",
    title: {
      en: "Undergraduate Research Teaching Assistant",
      es: "Asistente de Investigación"
    },
    courseCode: "VICE-3001",
    period: "Fall 2022–Fall 2024",
    startDate: new Date("2022-08-08T12:00:00-05:00"),
    endDate: new Date("2024-12-07T12:00:00-05:00"),
    supervisor: "Prof. Eduardo Rosales, Ph.D.",
    description: {
      en: {
        full: "Collaborated on a seven-person team to manage the university’s programming support center",
      },
    },
    achievements: [
      {
        en: {
          full: "Oversaw the university’s Coursera courses “Programming in Python” and “Introduction to Object Oriented Programming in Java,” with 50,000+ and 60,000+ historical enrollments, respectively",
          short: "Oversaw Coursera courses with 50,000+ and 60,000+ historical enrollments"
        },
      },
      {
        showInCV: false,
        en: {
          full: "Managed schedules for about 40 tutors and about 70 TAs each semester, overseeing a system that enabled 1,500+ students to book tutoring sessions",
          short: "Managed schedules for about 40 tutors and about 70 TAs each semester. Oversaw a system that enabled 1,500+ students to book tutoring sessions"
        },
      },
      {
        en: {
          full: "Designed and co-built CupiHorarios, a scheduling web application (FastAPI, React) leveraging the Pyomo optimization modeling library to generate schedules that ensured full coverage during operating hours",
        },
      },
      {
        en: {
          full: "Co-designed and co-built CupiFeedback, a tutoring performance analytics web application (FastAPI, React) that collected feedback from 1,500+ students and presented insights through interactive visualizations",
        },
      },
      {
        showInCV: false,
        en: {
          full: "Co-designed CupiMonitores, a web application that centralized TA evaluation and was ultimately adopted university-wide",
        },
      },
      {
        showInCV: false,
        en: {
          full: "Developed automation systems, including a TypeScript Discord bot for remote tutoring tracking and programming problems with automated solution verification",
        },
      },
      {
        showInCV: false,
        en: {
          full: "Led tutor recruitment and training processes, conducting candidate interviews and occasionally covering tutor absences by teaching data structures and algorithms concepts",
        },
      },
    ],
    ...UNIANDES,
  },
  {
    id: "mate-1207-2024-19-ta",
    isCurrent: false,
    showInCV: false,
    showInResume: false,
    type: "undergraduate",
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    courseCode: "MATE-1207",
    period: "Summer 2024",
    startDate: new Date("2024-06-04T12:00:00-05:00"),
    endDate: new Date("2024-07-26T12:00:00-05:00"),
    supervisor: "Prof. Jacinto Puig, Ph.D.",
    achievements: [
      {
        en: {
          full: "Designed and graded problem sets and conducted weekly office hours",
        },
      },
      {
        en: {
          full: "Covered partial derivatives, double and triple integrals, line and surface integrals, vector fields, curl and divergence calculations, and the fundamental theorems (Green’s, Stokes’, and Gauss’)",
        },
      },
      {
        en: {
          full: "Helped students apply these concepts to real-world problems, mainly involving constrained and unconstrained optimization",
        },
      },
    ],
    ...UNIANDES,
  },
  {
    id: "isis-1211-2022-10-tutor",
    showInCV: false,
    showInResume: false,
    type: "undergraduate",
    title: {
      en: "Tutor",
      es: "Tutor"
    },
    courseCode: "ISIS-1211",
    period: "Spring 2022",
    startDate: new Date("2022-02-01T12:00:00-05:00"),
    endDate: new Date("2022-06-04T12:00:00-05:00"),
    achievements: [
      {
        en: {
          full: "Conducted Python tutoring sessions, assisting 100+ students in total",
        },
      },
      {
        en: {
          full: "Guided students through problems involving classic data structures (arrays, linked lists, trees, tries, hash maps, graphs) and algorithmic problem-solving techniques",
        },
      },
    ],
    ...UNIANDES,
    isCurrent: false,
  },
  {
    id: "isis-1221-2021-10-ta",
    type: "undergraduate",
    showInCV: false,
    showInResume: false,
    isCurrent: false,
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    courseCode: "ISIS-1221",
    period: "Spring 2021",
    startDate: new Date("2021-02-01T12:00:00-05:00"),
    endDate: new Date("2021-06-05T12:00:00-05:00"),
    supervisor: "Prof. Diego Salinas",
    achievements: [
      {
        en: {
          full: "Assisted about 25 students with fundamental procedural programming concepts (variables, control structures, functions, data structures) and matrix operations using Python-specific libraries (Matplotlib, pandas)",
          short: "Assisted about 25 students with fundamental procedural programming concepts and matrix operations using Python-specific libraries"
        },
      },
      {
        en: {
          full: "Graded programming projects and provided feedback on coding practices and problem-solving approaches",
        },
      },
    ],
    ...UNIANDES,
  },
  {
    id: "mate-1203-2021-10-ta",
    type: "undergraduate",
    showInCV: false,
    showInResume: false,
    isCurrent: false,
    title: {
      en: "Undergraduate Teaching Assistant",
      es: "Monitor"
    },
    courseCode: "MATE-1203",
    period: "Spring 2021",
    startDate: new Date("2021-01-25T12:00:00-05:00"),
    endDate: new Date("2021-05-29T12:00:00-05:00"),
    supervisor: "Prof. Alexander Murcia, Ph.D.",
    achievements: [
      {
        en: {
          full: "Instructed about 45 students in limits, derivatives, and basic integrals, including applications to optimization problems, area between curves, and volumes of solids",
          short: "Instructed about 45 students in limits, derivatives, and basic integrals"
        },
      },
      {
        en: {
          full: "Graded worksheets and provided feedback",
        },
      },
    ],
    ...UNIANDES,
  },
];
