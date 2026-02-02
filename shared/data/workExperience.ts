import { UNIANDES } from "./constants";
import { CANALS_AI, CASEWARE } from "./organizations";
import type { WorkExperience } from "../schemas/workExperience";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Software Engineer"
    },
    team: {
      en: "Parsing"
    },
    organization: CANALS_AI,
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: new Date("2024-12-09T12:00:00-05:00"),
    description: {
      en: {
        full: "Parsed emails, voice calls, PDFs, images, spreadsheets, and handwritten documents into structured product data, processing 5,000+ orders daily for ~100 wholesale distribution customers.",
      }
    },
    achievements: [
      {
        en: {
          full: "Built a real-time voice parsing service with WebSocket orchestration, speech-to-text transcription, speaker diarization, and concurrency control to extract products from live phone calls",
        }
      },
      {
        en: {
          full: "Led large-scale prompt refactors improving QA pass rate from 85% to 89%, including model selection, prompt engineering, cache handling, fine-tuning, and regression testing for LLM outputs",
        }
      },
      {
        en: {
          full: "Built visual highlighting systems using DOM traversal, coordinate mapping, and string comparison to map parsed products to source documents. Reduced weekly highlighting errors by 2/3",
        }
      },
      {
        en: {
          full: "Developed text extraction algorithms for complex layouts (nested tables, side-by-side formats, schematics) supporting most file formats (PDF, DOCX, XLSX, MSG, EML, TIFF, etc.)",
        }
      },
      {
        en: {
          full: "Created performance monitoring dashboards for the Parsing team, later scaled to monitor 3 teams (20+ engineers)",
        }
      },
      {
        en: {
          full: "Abstracted OCR pipeline from single provider to support multiple providers, enabling format-specific OCR selection",
        }
      }
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "Redis",
      "SQL",
      "PostgreSQL",
      "Anthropic API",
      "OpenAI API",
      "Groq API",
      "Gemini API",
      "Hex",
      "Polars",
      "Plotly",
      "ClickUp",
    ],
    workMode: "remote",
    employmentType: "full-time",
    isCurrent: true,
  },
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Full-Stack Developer"
    },
    team: {
      en: "Vice Dean's Office of Student Affairs"
    },
    startDate: new Date("2024-02-15T12:00:00-05:00"),
    endDate: new Date("2025-07-31T12:00:00-05:00"),  // TODO: Consider splitting this entry into my time as dev and my time as SW consultant
    description: {
      en: {
        full: "Built a full-stack student data system for the Universidad de los Andes.",
        short: "Built full-stack student data system for Universidad de los Andes."
      }
    },
    technologies: [
      "Python",
      "Polars",
      "FastAPI",
      "TypeScript",
      "React (MUI)",
      "SQL",
      "PostgreSQL",
      "Coolify",
      "Docker",
      "Firebase",
    ],
    achievements: [
      {
        en: {
          full: "Designed and built a system (Python, Polars) from scratch to process student data with advanced filters and aggregations. The system ultimately fed 3 distinct university services through a unified REST API (FastAPI)",
          short: "Built student data processing system (Polars) serving 3 university services via unified REST API (FastAPI)"
        }
      },
      {
        en: {
          full: "Extended a web application (TypeScript, React, MUI) with advanced filtering, report generation, dynamic graphing, and role-based access control dashboards, which served 15,000+ students and 600+ faculty and staff",
          short: "Extended web application (TS, React, MUI) with advanced filtering, report generation, and dynamic graphing, serving 15,000+ students and 600+ faculty"
        }
      },
      {
        en: {
          full: "Enabled the university to discontinue an external student counseling platform through the advanced student analytics system, saving approximately 400M COP (~$100K USD) annually",
          short: "Enabled university to save ~$100K USD annually by replacing external counseling platform"
        }
      },
      {
        en: {
          full: "Architected and managed cross-VM communication systems for sensitive data, using air-gapping techniques and network management tools",
          short: "Architected secure cross-VM communication systems using air-gapping techniques"
        }
      },
      {
        en: {
          full: "Designed and co-implemented an academic and personal risk detection system that successfully alerted relevant stakeholders on 1000+ critical cases",
          short: "Co-implemented risk detection system alerting stakeholders on 1000+ critical student cases"
        }
      },
    ],
    workMode: "onsite",
    employmentType: "contract",
    ...UNIANDES,
  },
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Software Developer I"
    },
    organization: CASEWARE,
    team: {
      en: "Data Analytics"
    },
    squad: {
      en: "Notebook Ninjas"
    },
    city: "Toronto",
    state: "ON",
    country: "Canada",
    startDate: new Date("2024-01-15T12:00:00-05:00"),
    endDate: new Date("2024-07-12T12:00:00-05:00"),
    description: {
      en: {
        full: "Developed data analysis solutions and optimized backend services for financial auditing workflows on the Data Analytics team.",
        short: "Developed data analysis solutions and optimized backend services for financial auditing."
      }
    },
    technologies: [
      "Python",
      "Jupyter",
      "Java",
      "AWS (S3, DynamoDB)",
      "Jira"
    ],
    achievements: [
      {
        en: {
          full: "Awarded the June Team Award for 'delivering impactful contributions and hard work' as part of the Data Analytics team",
          short: "Awarded June Team Award for impactful contributions as part of Data Analytics team"
        }
      },
      {
        en: {
          full: "Developed Python-based Jupyter notebooks for financial and auditing data analysis",
          short: "Developed Jupyter notebooks for financial and auditing data analysis"
        }
      },
      {
        en: {
          full: "Optimized Java and TypeScript microservices performance using AWS S3 and DynamoDB, identifying and resolving bugs",
          short: "Optimized microservices (Java, TS) performance using AWS S3 and DynamoDB"
        }
      },
      {
        en: {
          full: "Authored and delivered technical reports (SPIKEs, RFCs) that influenced team architecture decisions and established best practices",
          short: "Authored technical reports influencing team architecture decisions and best practices"
        }
      },
    ],
    workMode: "remote",
    employmentType: "internship",
  },
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Backend Developer"
    },
    team: {
      en: "Engineering Faculty Research Center (CIFI)"
    },
    startDate: new Date("2023-08-21T12:00:00-05:00"),
    endDate: new Date("2023-12-09T12:00:00-05:00"),
    description: {
      en: {
        full: "Backend developer on the Professors' Portfolio project, a web application for managing faculty academic and administrative information.",
        short: "Backend developer on Professors' Portfolio web application for faculty management."
      }
    },
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "Oracle SQL Developer",
    ],
    achievements: [
      {
        en: {
          full: "Designed and implemented backend architecture for the Professors' Portfolio system (Java, Spring Boot), serving faculty members across the Engineering School",
          short: "Designed backend architecture serving faculty across Engineering School"
        }
      },
      {
        en: {
          full: "Built persistence, logic, and control layers with CRUD operations, custom logic, and RESTful API endpoints",
          short: "Built persistence, logic, and control layers with CRUD operations and RESTful APIs (Java, Spring)"
        }
      },
      {
        en: {
          full: "Devised efficient data migration methods to store large volumes of unstructured faculty data into relational databases",
          short: "Devised efficient data migration methods for unstructured faculty data"
        }
      },
      {
        en: {
          full: "Collaborated with Prof. José Bocanegra, Ph.D. on system architecture documentation and technical specifications, contributing to project planning and implementation roadmaps",
          short: "Collaborated on system architecture documentation and project planning roadmaps"
        }
      },
    ],
    workMode: "onsite",
    employmentType: "contract",
    ...UNIANDES,
  }
]
