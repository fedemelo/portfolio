.PHONY: cv resume webpage test plain-text-resume plain-text-cv

cv:
	./scripts/generate-pdf.sh cv

resume:
	./scripts/generate-pdf.sh resume

plain-text-resume:
	pnpm exec tsx scripts/plain-text-resume.ts

plain-text-cv:
	pnpm exec tsx scripts/plain-text-cv.ts

webpage:
	pnpm dev:webpage

test:
	pnpm test

