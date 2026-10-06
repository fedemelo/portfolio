.PHONY: cv resume watch-cv watch-resume json-cv json-resume check-documents plain-text-resume plain-text-cv webpage test

SHELL := /bin/bash
.SHELLFLAGS := -eo pipefail -c

DOCUMENTS := resume cv
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
	pnpm exec tsx scripts/print-json.ts $* > $*/$*.json

check-documents:
	@for document in $(DOCUMENTS); do \
		pnpm exec tsx scripts/print-json.ts $$document | cmp -s - $$document/$$document.json \
			|| { echo "Stale: $$document/$$document.json. Run \`make $$document\` and commit the result." >&2; exit 1; }; \
	done

plain-text-resume plain-text-cv: plain-text-%:
	pnpm exec tsx scripts/print-plain-text.ts $* | tee "$(DOCUMENT_$*).txt"

webpage:
	pnpm dev:webpage

test:
	pnpm test
