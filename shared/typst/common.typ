#let base-size = 11pt
#let block-gap = 5pt
#let role-gap = 9pt
#let entry-gap = 13pt
#let award-gap = 8pt

#let setup(data, body) = {
  let kind-label = (resume: "Resume", cv: "CV").at(data.kind)
  set document(title: data.header.name + " - " + kind-label, author: data.header.name, date: none)
  set page(paper: "us-letter", margin: 0.5in)
  // Hyphenation would split words in the extracted text that ATS parsers read.
  set text(font: "New Computer Modern", size: base-size, lang: "en", hyphenate: false)
  set par(justify: true, leading: 0.65em, spacing: block-gap)
  set list(indent: 0.6em, body-indent: 0.5em, spacing: 0.6em)
  // Text extractors drop a hyphen at a line end ("speech-totext") and add a
  // space after a slash there, so compounds must never break across lines.
  show regex("[\w.]+([-/][\w.]+)+"): box
  show link: underline
  body
}

// Content at both margins. When both sides don't fit on one line, the end
// side moves whole to a right-aligned line of its own instead of wrapping.
#let row(start, end) = layout(size => {
  let fits = measure(start).width + 1em.to-absolute() + measure(end).width <= size.width
  if fits {
    par(justify: false)[#start #h(1fr) #end]
  } else {
    par(justify: false, start)
    block(width: 100%, align(right, end))
  }
})

#let bullets(items) = if items.len() > 0 {
  block(above: 5pt, list(..items))
}

#let section-heading(title) = block(
  above: 16pt,
  below: 10pt,
  width: 100%,
  sticky: true,
  stroke: (bottom: 1pt),
  inset: (bottom: 2pt),
  text(tracking: 0.5pt, upper(title)),
)

// Thin spaces: a regular space on each side of the dot looks too wide.
#let separator = "\u{2009}·\u{2009}"

#let role-entry(role, end, above: role-gap) = block(above: above, {
  block(sticky: true, below: block-gap, {
    row(emph((role.title, role.subtitle).filter(part => part != none).join(", ")), end)
    if role.supervisor != none [Supervisor: #role.supervisor]
  })
  bullets(role.bullets)
})

#let group-entry(org) = {
  let place-and-period = (org.location, org.period).filter(part => part != none).join(separator)
  block(sticky: true, below: block-gap, row(strong(org.name), place-and-period))
  pad(left: 0.2in, org.roles.map(role => role-entry(role, role.period)).join())
}

#let single-role-entry(org) = {
  let role = org.roles.first()
  block(sticky: true, below: block-gap, row(strong(org.name), role.period))
  role-entry(role, org.location, above: block-gap)
}

#let organization-entry(org) = block(above: entry-gap, {
  if org.period != none { group-entry(org) } else { single-role-entry(org) }
})

#let school-entry(school) = block(breakable: false, above: entry-gap, {
  row(strong(school.name), school.location)
  row(emph(school.degree), school.period)
  show school.honors: emph
  bullets(school.bullets)
})

#let award-entry(award) = block(breakable: false, above: award-gap, {
  row(strong(award.title), award.byline)
  pad(left: 1em, text(size: 0.9em, emph(award.description)))
})

#let labeled-line(line) = par(justify: false)[#strong(line.label): #line.text]

#let activity-entry(activity) = block(breakable: false, above: entry-gap, {
  strong(activity.title)
  bullets(activity.bullets)
})

#let coursework-line(area) = labeled-line((label: area.name, text: area.courses.join(", ")))

#let publication-entry(publication) = {
  let authors = publication.authors.map(a => if a.isUser { strong(a.name) } else { a.name }).join(", ")
  let available = if publication.link != none [ Available at: #link(publication.link.url, publication.link.text)]
  par(justify: false, hanging-indent: 1.5em)[
    #authors (#publication.year). "#publication.title". #emph(publication.description). #publication.institution.#available
  ]
}

#let section-body(section) = {
  let kind = section.kind
  if kind == "paragraph" { par(section.text) }
  else if kind == "experience" { section.organizations.map(organization-entry).join() }
  else if kind == "education" { section.schools.map(school-entry).join() }
  else if kind == "awards" { section.awards.map(award-entry).join() }
  else if kind == "labeled-lines" { section.lines.map(labeled-line).join() }
  else if kind == "activities" { section.activities.map(activity-entry).join() }
  else if kind == "coursework" { section.areas.map(coursework-line).join() }
  else if kind == "publications" { section.publications.map(publication-entry).join() }
  else { panic("Unknown section kind: " + kind) }
}

#let render-sections(sections) = for section in sections {
  section-heading(section.title)
  pad(left: base-size, section-body(section))
}
