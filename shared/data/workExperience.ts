import { UNIANDES } from "./constants";
import { CANALS_AI, CASEWARE } from "./organizations";
import type { WorkExperience } from "../schemas/workExperience";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    showInCV: true,
    showInResume: true,
    title: {
      en: "Software Engineer II",
      es: "Ingeniero de software II"
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
        },
        es: {
          full: "Fui responsable de los servicios de parsing de los sistemas de agentes de voz en vivo y de consultas, dentro de un pipeline que procesaba más de 20.000 pedidos diarios de más de 115 distribuidores mayoristas y más de 9.000 representantes de ventas",
        }
      },
      {
        en: {
          full: "Built the parsing and review layers of a real-time voice service (WebSocket orchestration, speech-to-text, speaker diarization, concurrency control). Extracted ~21 products per call from live phone calls with 75%+ retained through rep review"
        },
        es: {
          full: "Construí las capas de parsing y revisión de un servicio de voz en tiempo real (orquestación de WebSockets, transcripción de voz a texto, diarización de hablantes, control de concurrencia). Extraía ~21 productos por llamada en vivo, y más del 75 % se mantenía tras la revisión de los representantes",
        }
      },
      {
        en: {
          full: "Integrated tools (web search, spec sheet retrieval, ERP lookup, order tracking) into an inquiries AI agent that addressed customer questions on orders, materials, and logistics. Achieved 97% of answers citing a source and 80% rated positive by reps",
        },
        es: {
          full: "Integré herramientas (búsqueda web, consulta de fichas técnicas, consultas al ERP, seguimiento de pedidos) en un agente de IA de consultas que respondía preguntas de clientes sobre pedidos, materiales y logística. Logré que el 97 % de las respuestas citara una fuente y que los representantes calificaran el 80 % como positivas",
        }
      },
      {
        en: {
          full: "Contributed to Canals' shared agent framework (Mastra), adding extended thinking, reasoning effort, image/PDF input, temperature, and tool concurrency. Migrated four Parsing agents off hand-rolled, unbounded loops onto bounded runs with step and token ceilings",
        },
        es: {
          full: "Contribuí al framework compartido de agentes de Canals (Mastra), al que agregué extended thinking, nivel de razonamiento, entrada de imágenes y PDF, temperatura y concurrencia de herramientas. Migré cuatro agentes de Parsing de ciclos hechos a mano y sin límite a ejecuciones acotadas, con topes de pasos y de tokens",
        }
      },
      {
        en: {
          full: "Co-built an autonomous agent (Claude Agent SDK) that polled tickets, debugged parsing failures, and shipped prompt-level fixes for review, re-parsing each order to verify its own fix",
        },
        es: {
          full: "Construí en equipo un agente autónomo (Claude Agent SDK) que revisaba tickets periódicamente, depuraba fallas de parsing y enviaba a revisión correcciones a nivel de prompt, volviendo a procesar cada pedido para verificar su propia corrección",
        }
      },
      {
        en: {
          full: "One of 4 engineers on the 10-person Parsing team (~60 engineers total) holding merge approval rights on the main branch."
        },
        es: {
          full: "Uno de los 4 ingenieros del equipo de Parsing (10 personas; ~60 ingenieros en total) con permiso para aprobar merges a la rama principal.",
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
      en: "Software Engineer I",
      es: "Ingeniero de software I"
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
        },
        es: {
          full: "Mantuve un pipeline de parsing compatible con 19 tipos MIME de formatos complejos (p. ej., texto manuscrito o tachado, fotos borrosas y fragmentadas, referencias cruzadas a otros archivos), al servicio de ~60 distribuidores mayoristas que procesaban más de 4.000 pedidos diarios",
        }
      },
      {
        en: {
          full: "Abstracted OCR pipeline from single provider to support multiple providers, decoupling the implementation from Textract and enabling format-specific OCR selection, with a cache layer serving ~60% of requests in 0.07s versus 3.6–18.7s uncached",
        },
        es: {
          full: "Generalicé el pipeline de OCR, que dependía de un solo proveedor, para soportar varios: desacoplé la implementación de Textract y permití elegir el OCR según el formato, con una capa de caché que respondía ~60 % de las solicitudes en 0,07 s, frente a 3,6–18,7 s sin caché",
        }
      },
      {
        en: {
          full: "Led large-scale prompt refactors improving external QA pass rate from 85% to 89%. Involved: model selection, prompt engineering, cache handling, fine-tuning, and regression testing",
        },
        es: {
          full: "Lideré refactorizaciones de prompts a gran escala que subieron la tasa de aprobación del QA externo del 85 % al 89 %. Abarcaron selección de modelos, ingeniería de prompts, manejo de caché, fine-tuning y pruebas de regresión",
        }
      },
      {
        en: {
          full: "Built visual highlighting systems using DOM traversal, coordinate mapping, and string comparison to map parsed products to source documents. Reduced weekly highlighting errors by 2/3",
        },
        es: {
          full: "Construí sistemas de resaltado visual con recorrido del DOM, mapeo de coordenadas y comparación de cadenas para ubicar los productos procesados en los documentos fuente. Reduje en 2/3 los errores semanales de resaltado",
        }
      },
      {
        en: {
          full: "Joined as the company's 14th engineer."
        },
        es: {
          full: "Entré como el ingeniero número 14 de la empresa.",
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
      en: "Full-Stack Developer",
      es: "Desarrollador full-stack"
    },
    team: {
      en: "Vice Dean's Office of Student Affairs",
      es: "Vicedecanatura de Asuntos Estudiantiles"
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
        },
        es: {
          full: "Diseñé y construí un sistema full-stack de analítica de datos estudiantiles para más de 15.000 estudiantes y más de 600 profesores, que reemplazó una plataforma externa con un ahorro de ~USD 100.000 al año",
        }
      },
      {
        en: {
          full: "Built parallelized data processing pipeline (Python, Polars) with complex filtering and aggregations, exposed through a unified REST API (FastAPI)",
        },
        es: {
          full: "Construí un pipeline paralelizado de procesamiento de datos (Python, Polars) con filtros y agregaciones complejas, expuesto mediante una API REST unificada (FastAPI)",
        }
      },
      {
        en: {
          full: "Developed dynamic graphing, advanced filtering, report generation, and role-based dashboards in a React/TypeScript web app",
        },
        es: {
          full: "Desarrollé gráficas dinámicas, filtros avanzados, generación de reportes y tableros por rol en una aplicación web en React/TypeScript",
        }
      },
      {
        en: {
          full: "Built early-warning system for at-risk students (academic performance, dropout indicators), alerting counselors on 1,000+ critical cases",
        },
        es: {
          full: "Construí un sistema de alertas tempranas para estudiantes en riesgo (rendimiento académico, indicadores de deserción) que alertó a los consejeros sobre más de 1.000 casos críticos",
        }
      },
      {
        en: {
          full: "Architected secure cross-VM communication using air-gapping and network isolation techniques to ensure compliance with student data protection requirements",
        },
        es: {
          full: "Diseñé la arquitectura de una comunicación segura entre máquinas virtuales con técnicas de air-gapping y aislamiento de red, para cumplir los requisitos de protección de datos estudiantiles",
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
      en: "Software Developer I",
      es: "Desarrollador de software I"
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
        },
        es: {
          full: "Recibí el June Team Award por 'aportes de alto impacto y trabajo duro' como parte del equipo de Data Analytics",
          short: "Recibí el June Team Award por aportes de alto impacto en el equipo de Data Analytics",
        }
      },
      {
        en: {
          full: "Developed Python-based Jupyter notebooks for financial and auditing data analysis",
          short: "Developed Jupyter notebooks for financial and auditing data analysis"
        },
        es: {
          full: "Desarrollé notebooks de Jupyter en Python para el análisis de datos financieros y de auditoría",
          short: "Desarrollé notebooks de Jupyter para el análisis de datos financieros y de auditoría",
        }
      },
      {
        en: {
          full: "Optimized Java and TypeScript microservices performance using AWS S3 and DynamoDB, identifying and resolving bugs",
          short: "Optimized microservices (Java, TS) performance using AWS S3 and DynamoDB"
        },
        es: {
          full: "Optimicé el rendimiento de microservicios en Java y TypeScript con AWS S3 y DynamoDB, e identifiqué y corregí errores",
          short: "Optimicé el rendimiento de microservicios (Java, TS) con AWS S3 y DynamoDB",
        }
      },
      {
        en: {
          full: "Authored and delivered technical reports (SPIKEs, RFCs) that influenced team architecture decisions and established best practices",
          short: "Authored technical reports influencing team architecture decisions and best practices"
        },
        es: {
          full: "Redacté y presenté informes técnicos (SPIKEs, RFCs) que orientaron decisiones de arquitectura del equipo y establecieron buenas prácticas",
          short: "Redacté informes técnicos que orientaron decisiones de arquitectura y buenas prácticas del equipo",
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
      en: "Backend Developer",
      es: "Desarrollador backend"
    },
    team: {
      en: "Engineering Faculty Research Center (CIFI)",
      es: "Centro de Investigaciones de la Facultad de Ingeniería (CIFI)"
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
        },
        es: {
          full: "Diseñé e implementé la arquitectura backend del sistema Portafolio de Profesores (Java, Spring Boot), una aplicación web para gestionar la información académica y administrativa de los profesores.",
        }
      },
      {
        en: {
          full: "Built persistence, logic, and control layers with CRUD operations, custom logic, and RESTful APIs",
        },
        es: {
          full: "Construí las capas de persistencia, lógica y control, con operaciones CRUD, lógica a la medida y APIs RESTful",
        }
      },
      {
        en: {
          full: "Devised efficient data migration methods to store large volumes of unstructured faculty data into relational databases",
          short: "Devised efficient data migration methods for unstructured faculty data"
        },
        es: {
          full: "Ideé métodos eficientes de migración para almacenar grandes volúmenes de datos no estructurados de profesores en bases de datos relacionales",
          short: "Ideé métodos eficientes de migración para datos no estructurados de profesores",
        }
      },
      {
        en: {
          full: "Collaborated with Prof. José Bocanegra, Ph.D. on system architecture documentation and technical specifications, contributing to project planning and implementation roadmaps",
          short: "Collaborated on system architecture documentation and project planning roadmaps"
        },
        es: {
          full: "Colaboré con el profesor José Bocanegra, Ph. D., en la documentación de la arquitectura del sistema y en las especificaciones técnicas, y aporté a la planeación del proyecto y a las hojas de ruta de implementación",
          short: "Colaboré en la documentación de la arquitectura del sistema y en las hojas de ruta del proyecto",
        }
      },
    ],
    workMode: "hybrid",
    employmentType: "part-time",
    ...UNIANDES,
  }
]
