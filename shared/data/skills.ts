import type { Skill } from "../schemas/skill";

export const SKILLS: Skill[] = [
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "AI Engineering & LLM Orchestration"
    },
    // Highlighting the cutting-edge MCP integration mentioned in your experience [cite: 7]
    skills: ["Anthropic / OpenAI / Gemini / Groq APIs", "MCP", "TensorFlow", "PyTorch"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Backend & Systems Architecture"
    },
    // Positioning your core languages alongside high-performance frameworks you've used [cite: 6, 29, 46, 69]
    skills: ["Python", "Java", "TypeScript", "Swift", "FastAPI", "Spring Boot", "WebSocket Orchestration", "Concurrency Control"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Data Engineering & Infrastructure"
    },
    // Focusing on high-performance tools like Polars and AWS services [cite: 29, 37, 69]
    skills: ["Polars", "PostgreSQL", "Redis", "AWS (RDS, ECS, S3, DynamoDB)", "Docker", "GitHub CI/CD"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Product & Interface"
    },
    // Streamlining frontend to focus on modern frameworks [cite: 30, 69]
    skills: ["React", "Next.js", "Svelte", "Plotly", "ShadCN / MUI"],
  },
];