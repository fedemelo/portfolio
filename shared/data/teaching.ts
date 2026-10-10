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
          full: "Principal instructor for upper-division algorithm design course, delivering lectures and designing exams",
        },
        es: {
          full: "Profesor principal del curso avanzado de pregrado Diseño de Algoritmos, a cargo de las clases y del diseño de los exámenes",
        },
      },
      {
        en: {
          full: "Topics: divide and conquer, dynamic programming, graph algorithms, NP-completeness, approximation and randomized algorithms",
        },
        es: {
          full: "Temas: dividir y conquistar, programación dinámica, algoritmos sobre grafos, NP-completitud, algoritmos de aproximación y aleatorizados",
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
        full: "Principal instructor for introductory undergraduate course in procedural programming using Python",
      },
      es: {
        full: "Profesor principal del curso introductorio de pregrado de programación procedimental en Python",
      },
      showInResume: true,
    },
    achievements: [
      {
        en: {
          full: "Topics: programming fundamentals and data-processing libraries Pandas and Matplotlib",
        },
        es: {
          full: "Temas: fundamentos de programación y las librerías de procesamiento de datos Pandas y Matplotlib",
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
      es: "Monitor de investigación y docencia"
    },
    courseCode: "VICE-3001",
    period: "Fall 2022 – Fall 2024",
    startDate: new Date("2022-08-08T12:00:00-05:00"),
    endDate: new Date("2024-12-07T12:00:00-05:00"),
    supervisor: "Prof. Eduardo Rosales, Ph.D.",
    description: {
      en: {
        full: "Collaborated in a 7-person team under Prof. Eduardo Rosales, Ph.D., to manage the university's programming support center",
      },
      es: {
        full: "Hice parte de un equipo de 7 personas, dirigido por el profesor Eduardo Rosales, Ph. D., que administraba el centro de apoyo en programación de la universidad",
      },
    },
    achievements: [
      {
        en: {
          full: "Oversaw the university's Coursera courses 'Programming in Python' and 'Introduction to Object Oriented Programming in Java', which have 50,000+ and 60,000+ historical enrollments respectively",
          short: "Oversaw Coursera courses with 50,000+ and 60,000+ historical enrollments"
        },
        es: {
          full: "Supervisé los cursos de Coursera de la universidad 'Programación en Python' e 'Introducción a la programación orientada a objetos en Java', con más de 50.000 y más de 60.000 inscritos históricos, respectivamente",
          short: "Supervisé cursos de Coursera con más de 50.000 y más de 60.000 inscritos históricos",
        },
      },
      {
        en: {
          full: "Managed schedules for ~40 tutors and ~70 TAs each semester, overseeing a system that enabled 1,500+ students to book tutoring sessions",
          short: "Managed schedules for ~40 tutors and ~70 TAs each semester. Oversaw system that enabled 1,500+ students to book tutoring sessions"
        },
        es: {
          full: "Gestioné cada semestre los horarios de ~40 tutores y ~70 monitores, y supervisé un sistema con el que más de 1.500 estudiantes reservaban tutorías",
          short: "Gestioné cada semestre los horarios de ~40 tutores y ~70 monitores. Supervisé un sistema con el que más de 1.500 estudiantes reservaban tutorías",
        },
      },
      {
        en: {
          full: "Designed and co-built CupiHorarios, a scheduling web app (FastAPI, React) leveraging Pyomo (a constraint satisfaction optimization solver) to generate  schedules that ensured full coverage during operational hours",
        },
        es: {
          full: "Diseñé y construí en equipo CupiHorarios, una aplicación web de programación de horarios (FastAPI, React) que usa Pyomo (un solver de optimización con restricciones) para generar horarios que garantizaran cobertura completa durante el horario de atención",
        },
      },
      {
        en: {
          full: "Co-designed and co-built CupiFeedback, a tutoring performance analytics web app (FastAPI, React) that collected feedback from 1,500+ students and presented insights through interactive visualizations",
        },
        es: {
          full: "Diseñé y construí en equipo CupiFeedback, una aplicación web de analítica del desempeño de las tutorías (FastAPI, React) que recogió la retroalimentación de más de 1.500 estudiantes y presentaba los hallazgos en visualizaciones interactivas",
        },
      },
      {
        en: {
          full: "Co-designed CupiMonitores, a web app that centralized TA evaluation, which was ultimately adopted university-wide",
        },
        es: {
          full: "Diseñé en equipo CupiMonitores, una aplicación web que centralizó la evaluación de los monitores y que terminó adoptándose en toda la universidad",
        },
      },
      {
        en: {
          full: "Developed automation systems including a TypeScript Discord bot for remote tutoring tracking and programming problems with automated solution verification",
        },
        es: {
          full: "Desarrollé sistemas de automatización, entre ellos un bot de Discord en TypeScript para el seguimiento de las tutorías remotas y ejercicios de programación con verificación automática de soluciones",
        },
      },
      {
        en: {
          full: "Led tutor recruitment and training processes, conducting candidate interviews and occasionally providing coverage during tutor absences, teaching data structures and algorithms concepts",
        },
        es: {
          full: "Lideré la selección y capacitación de tutores: entrevisté candidatos y, ocasionalmente, cubrí ausencias de tutores enseñando conceptos de estructuras de datos y algoritmos",
        },
      },
    ],
    ...UNIANDES,
  },
  {
    id: "mate-1207-2024-19-ta",
    isCurrent: false,
    showInCV: true,
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
          full: "Designed and graded problem sets, and conducted weekly office hours",
        },
        es: {
          full: "Diseñé y califiqué talleres, y atendí horas de consulta semanales",
        },
      },
      {
        en: {
          full: "Covered partial derivatives, double and triple integrals, line and surface integrals, vector fields, curl and divergence calculations, and the fundamental theorems (Green's, Stokes', and Gauss')",
        },
        es: {
          full: "Cubrí derivadas parciales, integrales dobles y triples, integrales de línea y de superficie, campos vectoriales, cálculo de rotacional y divergencia, y los teoremas fundamentales (de Green, de Stokes y de Gauss)",
        },
      },
      {
        en: {
          full: "Helped students apply these concepts to real-world problems, mainly involving constrained and unconstrained optimization",
        },
        es: {
          full: "Ayudé a los estudiantes a aplicar estos conceptos a problemas reales, principalmente de optimización con y sin restricciones",
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
          full: "Conducted Python tutoring sessions, overall assisting 100+ students",
        },
        es: {
          full: "Dicté tutorías de Python, en las que atendí a más de 100 estudiantes en total",
        },
      },
      {
        en: {
          full: "Guided students through problems involving classic data structures (arrays, linked lists, trees, tries, hash maps, graphs) and algorithmic problem-solving techniques",
        },
        es: {
          full: "Guié a los estudiantes en problemas con estructuras de datos clásicas (arreglos, listas enlazadas, árboles, tries, tablas hash, grafos) y técnicas algorítmicas de resolución de problemas",
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
          full: "Assisted ~25 students with fundamental procedural programming concepts (variables, control structures, functions, data structures) and matrix operations using Python-specific libraries (matplotlib, pandas)",
          short: "Assisted ~25 students with fundamental procedural programming concepts and matrix operations using Python-specific libraries"
        },
        es: {
          full: "Acompañé a ~25 estudiantes en conceptos fundamentales de programación procedimental (variables, estructuras de control, funciones, estructuras de datos) y en operaciones con matrices usando librerías de Python (matplotlib, pandas)",
          short: "Acompañé a ~25 estudiantes en conceptos fundamentales de programación procedimental y en operaciones con matrices usando librerías de Python",
        },
      },
      {
        en: {
          full: "Graded programming projects and provided feedback on coding practices and problem-solving approaches",
        },
        es: {
          full: "Califiqué proyectos de programación y di retroalimentación sobre prácticas de código y enfoques de resolución de problemas",
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
          full: "Instructed ~45 students in limits, derivatives, and basic integrals, including applications to optimization problems, area between curves, and volumes of solids",
          short: "Instructed ~45 students in limits, derivatives, and basic integrals"
        },
        es: {
          full: "Enseñé a ~45 estudiantes límites, derivadas e integrales básicas, con aplicaciones a problemas de optimización, área entre curvas y volúmenes de sólidos",
          short: "Enseñé a ~45 estudiantes límites, derivadas e integrales básicas",
        },
      },
      {
        en: {
          full: "Graded worksheets and provided feedback",
        },
        es: {
          full: "Califiqué talleres y di retroalimentación",
        },
      },
    ],
    ...UNIANDES,
  },
];
