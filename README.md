# Federico Melo Barrero's Portfolio

A monorepo containing Federico Melo Barrero's personal portfolio applications:

- **Webpage**: [fedemelo.com](https://fedemelo.com)
- **CV**: [cv.fedemelo.com](https://cv.fedemelo.com)
- **Resume**: [resume.fedemelo.com](https://resume.fedemelo.com)
- **API**: [api.fedemelo.com](https://api.fedemelo.com) [[/docs](https://api.fedemelo.com/docs)]

Note: The API is not open for public use, only the documentation is available.

## Architecture

This is a pnpm workspace with independent modules that share common data.

| Workspace | Description                                    | Tech stack                                                                                                        |
| --------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `shared`  | Common data definitions, schemas and utilities | [TS](https://www.typescriptlang.org/) + [Zod](https://zod.dev/)                                                   |
| `api`     | RESTful API backend                            | [Fastify](https://www.fastify.io/) + [TS](https://www.typescriptlang.org/) + [Swagger](https://swagger.io/)       |
| `cv`      | CV frontend                                    | [Svelte](https://svelte.dev/) + [TS](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)               |
| `resume`  | Resume frontend                                | [Svelte](https://svelte.dev/) + [TS](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)               |
| `webpage` | Personal webpage                               | [Next.js](https://nextjs.org/) + [TS](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) |

## Development

Prerequisites are [Node.js 20](https://nodejs.org/), [pnpm](https://pnpm.io/), and [Docker](https://docker.com/).

Install dependencies for all modules with `pnpm install`.

Each module can be developed, built, and deployed separately. 

| Module  | Develop            | Port                          | Build                |
| ------- | ------------------ | ----------------------------- | -------------------- |
| CV      | `pnpm dev:cv`      | [5173](http://localhost:5173) | `pnpm build:cv`      |
| Resume  | `pnpm dev:resume`  | [5174](http://localhost:5174) | `pnpm build:resume`  |
| API     | `pnpm dev:api`     | [8003](http://localhost:8003) | `pnpm build:api`     |
| Webpage | `pnpm dev:webpage` | [3001](http://localhost:3001) | `pnpm build:webpage` |

Development via Docker is also supported, see [Docker Deployment](#docker-deployment).

[//]: # (TODO: Add test commands)

## Deployment

### Cloudflare Pages

Each module deploys to its own domain or subdomain via an independent Cloudflare Pages project. Cloudflare Pages doesn't support [pnpm](https://pnpm.io/) directly, so the build commands use [npm](https://www.npmjs.com/) instead. All modules use [Node.js 20](https://nodejs.org/).

| Module  | Domain / Subdomain                                 | Build Command                 | Build Output Directory |
| ------- | -------------------------------------------------- | ----------------------------- | ---------------------- |
| Webpage | [fedemelo.com](https://fedemelo.com)               | `cd webpage && npm run build` | `webpage/out`          |
| CV      | [cv.fedemelo.com](https://cv.fedemelo.com)         | `cd cv && npm run build`      | `cv/dist`              |
| Resume  | [resume.fedemelo.com](https://resume.fedemelo.com) | `cd resume && npm run build`  | `resume/dist`          |

### Docker Deployment

For VPS or containerized deployments, build all images and run all services with Docker Compose:
```bash
pnpm docker:dev
```

To only build (and not run) all images, run: `pnpm docker:build`.

Commands per service:
| Service | Build                       | URL                    | Build production image                                     | Run production image                      |
| ------- | --------------------------- | ---------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| Webpage | `pnpm docker:build:webpage` | http://localhost:3001/ | `docker build -f webpage/Dockerfile -t webpage-frontend .` | `docker run -d -p 80:80 webpage-frontend` |
| CV      | `pnpm docker:build:cv`      | http://localhost:5173/ | `docker build -f cv/Dockerfile -t cv-frontend .`           | `docker run -d -p 80:80 cv-frontend`      |
| Resume  | `pnpm docker:build:resume`  | http://localhost:5174/ | `docker build -f resume/Dockerfile -t resume-frontend .`   | `docker run -d -p 80:80 resume-frontend`  |
| API     | `pnpm docker:build:api`     | http://localhost:8003/ | `docker build -f api/Dockerfile -t api-backend .`          | `docker run -d -p 8003:8003 api-backend`  |