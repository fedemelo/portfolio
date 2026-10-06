.PHONY: cv resume watch-cv watch-resume json-cv json-resume check-documents plain-text-resume plain-text-cv webpage test

DOCUMENT_resume := resume/Federico Melo Barrero - Resume
DOCUMENT_cv := cv/Federico Melo Barrero - CV

# Fonts are embedded in Typst, so ignoring system fonts keeps builds identical across machines.
TYPST_FLAGS := --root . --ignore-system-fonts

cv resume: %: json-%
	typst compile $(TYPST_FLAGS) $*/$*.typ "$(DOCUMENT_$*).pdf"

# Live preview: recompiles on template changes. Rerun `make json-<document>` after editing shared/data.
watch-cv watch-resume: watch-%: json-%
	typst watch $(TYPST_FLAGS) $*/$*.typ "$(DOCUMENT_$*).pdf"

json-cv json-resume: json-%:
	pnpm exec tsx scripts/write-json.ts $*

check-documents:
	pnpm exec tsx scripts/check-json.ts

plain-text-resume plain-text-cv: plain-text-%:
	pnpm exec tsx scripts/write-plain-text.ts $* "$(DOCUMENT_$*).txt"

webpage:
	pnpm dev:webpage

test:
	pnpm test
