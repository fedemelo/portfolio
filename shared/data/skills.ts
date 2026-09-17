import type { Skill } from "../schemas/skill";

export const SKILLS: Skill[] = [
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "AI Engineering & LLM Orchestration"
    },
    skills: ["Anthropic / OpenAI / Gemini / Groq APIs", "Claude Agent SDK", "Mastra", "MCP"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Backend & Systems Architecture"
    },
    skills: ["Python", "Java", "TypeScript", "FastAPI", "Spring Boot", "WebSocket Orchestration", "Concurrency Control"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Data Engineering & Infrastructure"
    },
    skills: ["Polars", "PostgreSQL", "Redis", "AWS (RDS, ECS, S3, DynamoDB)", "Docker", "GitHub CI/CD"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Product & Interface"
    },
    skills: ["React", "Next.js", "Svelte", "Plotly", "ShadCN / MUI"],
  },
];