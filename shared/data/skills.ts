import type { Skill } from "../schemas/skill";

export const SKILLS: Skill[] = [
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Programming Languages"
    },
    skills: ["Python", "TypeScript", "Rust", "Java", "Bash"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "AI Engineering and LLM Orchestration"
    },
    skills: ["Anthropic/OpenAI/Gemini/Groq APIs", "Claude Agent SDK", "Mastra", "MCP"],
  },
  {
    showInCV: true,
    showInResume: false,
    category: {
      en: "AI-Assisted Development"
    },
    skills: ["Claude Code (own plugin with 50+ skills and enforcement hooks, custom MCP servers, remote multi-agent orchestration)", "Codex", "Cursor"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Backend and Systems Architecture"
    },
    skills: ["FastAPI", "Spring Boot", "WebSocket orchestration", "concurrency control"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Data Engineering and Infrastructure"
    },
    skills: ["Polars", "pandas", "Matplotlib", "Pyomo", "PostgreSQL", "Redis", "AWS (RDS, ECS, S3, DynamoDB)", "Docker", "Linux", "Git", "GitHub Actions (CI/CD)"],
  },
  {
    showInCV: true,
    showInResume: true,
    category: {
      en: "Product and Interface"
    },
    skills: ["React", "Next.js", "Svelte", "Plotly", "shadcn/ui", "MUI"],
  },
];