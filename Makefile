.PHONY: cv resume webpage test pdf-cv pdf-resume

cv:
	pnpm dev:cv

resume:
	pnpm dev:resume

webpage:
	pnpm dev:webpage

test:
	pnpm test

pdf-cv:
	./scripts/generate-pdf.sh cv

pdf-resume:
	./scripts/generate-pdf.sh resume