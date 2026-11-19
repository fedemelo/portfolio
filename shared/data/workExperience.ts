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
    country: "United States",
    startDate: new Date("2025-07-01T12:00:00-05:00"),
    details: [
      {
        en: {
          full: "Own the parsing services for the live voice and inquiry agent systems, part of a pipeline that processes 20,000+ orders daily across 115+ wholesale distributors and 9,000+ sales reps, and maintain a 481-case end-to-end regression suite",
        }
      },
      {
        en: {
          full: "Built the parsing and review layers of a real-time voice service (WebSocket orchestration, speech-to-text, speaker diarization, concurrency control). Extracted about 21 products per live phone call, with 75%+ retained through rep review"
        }
      },
      {
        en: {
          full: "Integrated tools (web search, spec sheet retrieval, ERP lookup, order tracking) into an AI inquiry agent that addressed customer questions about orders, materials, and logistics. Achieved source citations in 97% of answers and positive rep ratings on 80%",
        }
      },
      {
        en: {
          full: "Contributed to Canals’ shared agent framework (Mastra), adding support for extended thinking, reasoning effort, image/PDF input, temperature, and tool concurrency. Migrated four parsing agents from hand-rolled, unbounded loops to bounded runs with step and token ceilings",
        }
      },
      {
        en: {
          full: "Co-built an autonomous agent (Claude Agent SDK) that polled tickets, debugged parsing failures, and shipped prompt-level fixes, re-parsing each order to verify its own fix",
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
    country: "United States",
    startDate: new Date("2024-12-09T12:00:00-05:00"),
    endDate: new Date("2025-07-01T12:00:00-05:00"),
    details: [
      {
        en: {
          full: "Maintained a parsing pipeline supporting 19 MIME types with intricate formats (e.g., handwritten and struck-through text, blurry and fragmented photos, cross-references to other files), serving about 60 wholesale distributors that processed 4,000+ orders daily",
        }
      },
      {
        en: {
          full: "Abstracted the OCR pipeline from a single provider to support multiple providers, decoupling the implementation from Textract and enabling format-specific OCR selection across 18.2 million documents, with a cache layer serving about 60% of requests in 0.07 s versus 3.6–18.7 s uncached",
        }
      },
      {
        en: {
          full: "Led large-scale prompt refactors spanning model selection, prompt engineering, cache handling, and regression testing, improving the external QA pass rate from 85% to 89%",
        }
      },
      {
        en: {
          full: "Built visual highlighting systems using DOM traversal, coordinate mapping, and string comparison to map parsed products to source documents. Reduced weekly highlighting errors by two-thirds",
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
      en: "Vice Dean’s Office of Student Affairs"
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
          full: "Designed and built a full-stack student data analytics system serving 15,000+ students and 600+ faculty, replacing an external platform and saving about US$100,000 annually",
        }
      },
      {
        en: {
          full: "Built a parallelized data-processing pipeline (Python, Polars) with complex filtering and aggregations, exposed through a unified REST API (FastAPI)",
        }
      },
      {
        en: {
          full: "Developed dynamic graphing, advanced filtering, report generation, and role-based dashboards in a React/TypeScript web application",
        }
      },
      {
        en: {
          full: "Built an early-warning system for at-risk students (academic performance, dropout indicators), alerting counselors to 1,000+ critical cases",
        }
      },
      {
        en: {
          full: "Architected secure communication between VMs, isolating the machine holding student data on a segmented network to ensure compliance with student data protection requirements",
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
          full: "Developed Python-based Jupyter notebooks for financial and auditing data analysis",
          short: "Developed Jupyter notebooks for financial and auditing data analysis"
        }
      },
      {
        en: {
          full: "Optimized the performance of Java and TypeScript microservices using Amazon S3 and DynamoDB, identifying and resolving bugs",
          short: "Optimized microservice performance (Java, TypeScript) using Amazon S3 and DynamoDB"
        }
      },
      {
        en: {
          full: "Authored and delivered technical reports (spikes, RFCs) that influenced team architecture decisions and established best practices",
          short: "Authored technical reports influencing team architecture decisions and best practices"
        }
      },
      {
        en: {
          full: "Awarded the June Team Award for “delivering impactful contributions and hard work” as part of the Data Analytics team",
          short: "Awarded the June Team Award for impactful contributions as part of the Data Analytics team"
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
      en: "School of Engineering Research Center (CIFI)"
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
          full: "Designed and implemented the backend architecture for the Professors’ Portfolio system (Java, Spring Boot), a web application for managing faculty academic and administrative information",
        }
      },
      {
        en: {
          full: "Built persistence, logic, and control layers with CRUD operations, custom logic, and RESTful APIs",
        }
      },
      {
        en: {
          full: "Devised efficient data migration methods to store large volumes of unstructured faculty data in relational databases",
          short: "Devised efficient data migration methods for unstructured faculty data"
        }
      },
      {
        en: {
          full: "Collaborated with Prof. José Bocanegra, Ph.D., on system architecture documentation and technical specifications, contributing to project planning and implementation roadmaps",
          short: "Collaborated on system architecture documentation and project planning roadmaps"
        }
      },
    ],
    workMode: "hybrid",
    employmentType: "part-time",
    ...UNIANDES,
  }
]
