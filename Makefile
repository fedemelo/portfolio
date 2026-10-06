.PHONY: cv resume webpage test plain-text-resume plain-text-cv

cv:
	./scripts/generate-pdf.sh cv

resume:
	./scripts/generate-pdf.sh resume

plain-text-resume:
	pnpm exec tsx scripts/write-plain-text.ts resume "resume/Federico Melo Barrero - Resume.txt"

plain-text-cv:
	pnpm exec tsx scripts/write-plain-text.ts cv "cv/Federico Melo Barrero - CV.txt"

webpage:
	pnpm dev:webpage

test:
	pnpm test

