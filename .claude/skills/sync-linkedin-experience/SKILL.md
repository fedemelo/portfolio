---
name: sync-linkedin-experience
description: Syncs the Experience section of this user's LinkedIn profile to match the current resume bullets in this repo, via Claude in Chrome browser automation (there is no LinkedIn API). Use this whenever the user asks to update, sync, or match LinkedIn to the resume.
---

# Sync LinkedIn Experience to the resume

This repo's resume (`resume/`) is the source of truth for job bullets. LinkedIn is a second,
manually-maintained copy that drifts out of date. This skill ports the current resume bullets for
one or more jobs onto the matching LinkedIn Experience entries — nothing more. It does not touch
headline, About, Education, Skills, or anything outside Experience bullets, and it never posts,
shares, or creates a new connection or new entry on its own.

## Why each rule below exists

LinkedIn's edit-save flow has two behaviors that are easy to trigger by accident and that the user
does not want: it defaults "Notify network" to on (pings connections and nudges toward a "share
this update as a post" prompt), and after saving it chains into "People you may know" /
connect-suggestion screens that look like they need a response but don't. Neither is part of
updating a bullet list, so this skill treats both as noise to dismiss, not steps to complete.

Resume bullets are hand-tuned to fit page width (see `resume/TODO.md` for the kind of trimming
decisions that go into them) and are deliberately verbatim between the resume and LinkedIn — don't
paraphrase, summarize, or "LinkedIn-ify" them unless the user explicitly asks for that instead.

## Step 1 — Get ground-truth bullet text

Don't read bullet text out of `shared/data/workExperience.ts` / `shared/data/teaching.ts` and
assume it's what prints — those files have `full` and `short` variants, and the resume component
picks between them (short wins when present). Resolving that ambiguity is exactly what
`make plain-text-resume` does: it runs `scripts/plain-text-resume.ts`, which imports the same
`shared/utils` functions the Svelte resume renders with (`getResumeText`, `filterForResume`, the
grouping/date logic) and prints the exact text that would appear on the PDF — no PDF generation,
no OCR-style reflowing of wrapped lines, no ambiguity to resolve after the fact. Run it from the
repo root:

```bash
cd <repo root>
make plain-text-resume
```

Read the EXPERIENCE section of the output (also saved to
`resume/Federico Melo Barrero - Resume.txt`). Each bullet is already one line — nothing to reflow.

If the user only wants specific jobs synced (e.g. "just update Canals"), use only those entries;
don't touch jobs they didn't mention.

## Step 2 — Open LinkedIn and check you're logged in

Load the Claude in Chrome tools if not already loaded, then navigate to:

```
https://www.linkedin.com/in/<linkedInPath>/details/experience/
```

`<linkedInPath>` comes from `shared/data/personalInfo.ts` (`PERSONAL_INFO.linkedInPath`) — don't
hardcode it, the repo already knows it.

**If this hits a login page or an authwall** ("Sign in", "Join now", a German or English login
form, anything other than the Experience list): **stop immediately.** Do not attempt to log in,
guess credentials, or use any stored session. Tell the user plainly that LinkedIn isn't
authenticated in this Chrome profile, ask them to log in manually in the browser window, and wait
for their explicit acknowledgment that they're logged in before taking any further action. This
mirrors how credentials are handled everywhere else — browser automation never enters login
credentials on the user's behalf, logged-in-looking session or not.

## Step 3 — Match each resume job to an existing LinkedIn entry

For each job you're syncing, find the LinkedIn Experience entry with the matching organization and
title (e.g. "Canals AI" / "Software Engineer II"). LinkedIn groups multiple titles under one
company header — expect that.

**If no existing entry matches** a resume job you're trying to sync (new role, retitled role,
a company with no entry yet): **stop and tell the user.** Name the specific resume entry that has
no LinkedIn counterpart, and do not create one. Creating an Experience entry is a judgment call
about title wording, dates, and framing that belongs to the user, not something to infer from
resume data. Only create one if the user explicitly instructs it in this conversation and gives
you the specifics (title, org, dates, location, employment type) to use — don't invent any of
those fields yourself even then.

Proceed with the entries that do match; report the unmatched ones alongside the matched work
rather than silently skipping them.

## Step 4 — Edit each matching entry

For each entry to update:

1. Click its edit (pencil) icon to open the "Edit role" dialog.
2. **Turn "Notify network" off first, before changing anything else.** It defaults on. This is the
   single most important click in this workflow — skipping it means the edit pings the user's
   connections over a bullet-wording change.
3. Click into the Highlights / description textarea, select all (`cmd+a`), delete.
4. Type the ground-truth bullets from Step 1, one per line, each prefixed with `• `, reflowed to
   one line per bullet (ignore the PDF's line wraps — LinkedIn wraps its own textarea).
5. Screenshot and visually compare what's in the textarea against the resume text before saving —
   typos here are as real as typos anywhere else in this repo.
6. Click Save.

## Step 5 — Handle what happens after Save, without engaging with it

Saving reliably triggers a confirmation dialog ("Your experience is saved") chained into a
"connect with people you may know from <company>" screen. This is not part of the task — click
**Skip**, don't click Connect on anyone. If at any point a prompt appears offering to **post,
share, or notify your network about this update**, close it with its **X** or decline/skip
control — never click through it, never let it open a post composer, and never type into one even
to dismiss it. If you're ever unsure whether a dialog is the harmless "people you may know" kind or
a share/post prompt, treat it as the latter and just close it with X rather than clicking any
affirmative button.

## Step 6 — Clean up and report back

Close any tabs this skill opened (`tabs_close_mcp`) once all matched entries are updated. Tell the
user, per job: which entries were updated (with a quick visual confirmation of the new bullet
text), and which resume entries had no LinkedIn match and were left untouched per Step 3.
