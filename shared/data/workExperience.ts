import { UNIANDES } from "./constants";
import { CANALS_AI, CASEWARE } from "./organizations";
import type { WorkExperience } from "../schemas/workExperience";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Software Engineer II"
    },
    team: {
      en: "Parsing"
    },
    organization: CANALS_AI,
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: new Date("2025-07-01T12:00:00-05:00"),
    details: [
      {
        en: {
          full: "Owned parsing services for the live voice and inquiries agent systems, as part of a pipeline that processed 20000+ orders daily across 115+ wholesale distributors and 9000+ sales reps",
        }
      },
      {
        en: {
          full: "Built the parsing and review layers of a real-time voice service (WebSocket orchestration, speech-to-text, speaker diarization, concurrency control). Extracted ~21 products per call from live phone calls with 75%+ retained through rep review"
        }
      },
      {
        en: {
          full: "Integrated tools (web search, spec sheet retrieval, ERP lookup, order tracking) into an inquiries AI agent that addressed customer questions on orders, materials, and logistics. Achieved 97% of answers citing a source and 80% rated positive by reps",
        }
      },
      {
        en: {
          full: "Contributed to Canals' shared agent framework (Mastra)m adding extended thinking, reasoning effort, image/PDF input, temperature, and tool concurrency. Migrated four Parsing agents off hand-rolled, unbounded loops onto bounded runs with step and token ceilings",
        }
      },
      {
        en: {
          full: "Co-built an autonomous agent (Claude Agent SDK) that polled tickets, debugged parsing failures, and shipped prompt-level fixes for review, re-parsing each order to verify its own fix",
        }
      },
      {
        en: {
          full: "One of 4 engineers on the 10-person Parsing team (~60 engineers total) holding merge approval rights on the main branch."
        }
      }
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "Redis",
      "PostgreSQL",
      "LLM APIs (OpenAI, Anthropic, Gemini)",
      "Polars",
      "Mastra",
      "Claude Agent SDK",
    ],
    workMode: "remote",
    employmentType: "full-time",
    isCurrent: true,
    groupId: "canals-ai",
  },
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Software Engineer I"
    },
    team: {
      en: "Parsing"
    },
    organization: CANALS_AI,
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: new Date("2024-12-09T12:00:00-05:00"),
    endDate: new Date("2025-07-01T12:00:00-05:00"),
    details: [
      {
        en: {
          full: "Maintained a parsing pipeline supporting 19 mimetypes with intricate formats (e.g., handwritten, struck-through text, blurry and fragmented photos, cross-references to other files) in a pipeline serving ~60 wholesale distributors processing 4,000+ orders daily",
        }
      },
      {
        en: {
          full: "Abstracted OCR pipeline from single provider to support multiple providers, decoupling the implementation from Textract and enabling format-specific OCR selection, with a cache layer serving ~60% of requests in 0.07s versus 3.6–18.7s uncached",
        }
      },
      {
        en: {
          full: "Led large-scale prompt refactors improving external QA pass rate from 85% to 89%. Involved: model selection, prompt engineering, cache handling, fine-tuning, and regression testing",
        }
      },
      {
        en: {
          full: "Built visual highlighting systems using DOM traversal, coordinate mapping, and string comparison to map parsed products to source documents. Reduced weekly highlighting errors by 2/3",
        }
      },
      {
        en: {
          full: "Joined as the company's 14th engineer."
        }
      }
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "PostgreSQL",
      "LLM APIs (OpenAI, Anthropic, Gemini)",
    ],
    workMode: "remote",
    employmentType: "full-time",
    groupId: "canals-ai",
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
    // Substance prevails over form. Contract states 15/02 as start date, but I started the project with the start of the academic year, 22/01
    startDate: new Date("2024-01-22T12:00:00-05:00"),
    endDate: new Date("2024-12-07T12:00:00-05:00"),
    technologies: [
      "Python",
      "Polars",
      "FastAPI",
      "TypeScript",
      "React (MUI)",
      "PostgreSQL",
      "Docker",
      "Firebase",
    ],
    details: [
      {
        en: {
          full: "Designed and built full-stack student data analytics system serving 15,000+ students and 600+ faculty, replacing an external platform and saving ~$100K USD annually",
        }
      },
      {
        en: {
          full: "Built parallelized data processing pipeline (Python, Polars) with complex filtering and aggregations, exposed through a unified REST API (FastAPI)",
        }
      },
      {
        en: {
          full: "Developed dynamic graphing, advanced filtering, report generation, and role-based dashboards in a React/TypeScript web app",
        }
      },
      {
        en: {
          full: "Built early-warning system for at-risk students (academic performance, dropout indicators), alerting counselors on 1,000+ critical cases",
        }
      },
      {
        en: {
          full: "Architected secure cross-VM communication using air-gapping and network isolation techniques to ensure compliance with student data protection requirements",
        }
      },
    ],
    workMode: "onsite",
    employmentType: "part-time",
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
    technologies: [
      "Python",
      "Jupyter",
      "Java",
      "AWS (S3, DynamoDB)",
      "Jira"
    ],
    details: [
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
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "Oracle SQL Developer",
    ],
    details: [
      {
        en: {
          full: "Designed and implemented backend architecture for the Professors' Portfolio system (Java, Spring Boot), a web application for managing faculty academic and administrative information.",
        }
      },
      {
        en: {
          full: "Built persistence, logic, and control layers with CRUD operations, custom logic, and RESTful APIs",
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
    workMode: "hybrid",
    employmentType: "part-time",
    ...UNIANDES,
  }
]
