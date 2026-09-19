.PHONY: cv resume webpage test

cv:
	./scripts/generate-pdf.sh cv

resume:
	./scripts/generate-pdf.sh resume

webpage:
	pnpm dev:webpage

test:
	pnpm test

