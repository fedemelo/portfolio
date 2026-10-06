# Federico Melo Barrero's Portfolio

A monorepo containing Federico Melo Barrero's personal portfolio applications:

- **Webpage**: [fedemelo.com](https://fedemelo.com)
- **CV**: [PDF](cv/Federico%20Melo%20Barrero%20-%20CV.pdf), built with [Typst](https://typst.app/)
- **Resume**: [PDF](resume/Federico%20Melo%20Barrero%20-%20Resume.pdf), built with [Typst](https://typst.app/)

## Architecture

This is a pnpm workspace with independent modules that share common data.

| Workspace | Description                    | Tech stack                                                                                                        |
| --------- | -----------------------------  | ----------------------------------------------------------------------------------------------------------------- |
| `shared`  | Common data, schemas and utils | [TS](https://www.typescriptlang.org/) + [Zod](https://zod.dev/)                                                   |
| `api`     | RESTful API backend            | [Fastify](https://www.fastify.io/) + [TS](https://www.typescriptlang.org/) + [Swagger](https://swagger.io/)       |
| `webpage` | Personal webpage               | [Next.js](https://nextjs.org/) + [TS](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) |

## Development

Prerequisites are [Node.js 20](https://nodejs.org/), [pnpm](https://pnpm.io/), and [Docker](https://docker.com/).

Install dependencies for all modules with `pnpm install`.

Each module can be developed, built, and deployed separately. 

| Module  | Develop            | Port                          | Build                |
| ------- | ------------------ | ----------------------------- | -------------------- |
| API     | `pnpm dev:api`     | [8003](http://localhost:8003) | `pnpm build:api`     |
| Webpage | `pnpm dev:webpage` | [3001](http://localhost:3001) | `pnpm build:webpage` |

Development via Docker is also supported, see [Docker Deployment](#docker-deployment).

### Resume and CV

The resume and CV are PDFs built by [Typst](https://typst.app/) (`brew install typst`) from the data in `shared/data`. `shared/document/build.ts` decides what each document contains and `scripts/print-json.ts` prints it to `resume/resume.json` and `cv/cv.json`, which the templates `resume/resume.typ` and `cv/cv.typ` lay out with the pieces in `shared/typst/common.typ`.

| Command                                         | Effect                                                           |
| ----------------------------------------------- | ---------------------------------------------------------------- |
| `make resume`, `make cv`                        | Regenerate the JSON and compile the PDF                          |
| `make watch-resume`, `make watch-cv`            | Recompile the PDF on every template change                       |
| `make plain-text-resume`, `make plain-text-cv`  | Write the document as plain text, for pasting into forms         |
| `make check-documents`                          | Fail if a committed JSON no longer matches `shared/data`         |

Commit the JSON and PDF together after every rebuild. The check also runs in `pnpm test`. The webpage serves both PDFs through symlinks in `webpage/public/documents`.

[//]: # (TODO: Add test commands)

## Deployment

### Cloudflare Pages

Each module deploys **automatically on push to main** to its own domain or subdomain via an independent Cloudflare Pages project. Cloudflare Pages doesn't support [pnpm](https://pnpm.io/) directly, so the build commands use [npm](https://www.npmjs.com/) instead. All modules use [Node.js 20](https://nodejs.org/).

| Module  | Domain / Subdomain                                 | Build Command                 | Build Output Directory |
| ------- | -------------------------------------------------- | ----------------------------- | ---------------------- |
| Webpage | [fedemelo.com](https://fedemelo.com)               | `cd webpage && npm run build` | `webpage/out`          |

### Docker Deployment

For VPS or containerized deployments, build all images and run all services with Docker Compose:
```bash
pnpm docker:dev
```

To only build (but not run) all images, run: `pnpm docker:build`.

Commands per service:
| Service | Build                       | URL                    | Build production image                                     | Run production image                      |
| ------- | --------------------------- | ---------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| Webpage | `pnpm docker:build:webpage` | http://localhost:3001/ | `docker build -f webpage/Dockerfile -t webpage-frontend .` | `docker run -d -p 80:80 webpage-frontend` |
| API     | `pnpm docker:build:api`     | http://localhost:8003/ | `docker build -f api/Dockerfile -t api-backend .`          | `docker run -d -p 8003:8003 api-backend`  |
