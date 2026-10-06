#let base-size = 11pt
#let block-gap = 5pt
#let role-gap = 9pt
#let entry-gap = 13pt

#let setup(data, body) = {
  let kind-label = (resume: "Resume", cv: "CV").at(data.kind)
  set document(title: data.header.name + " - " + kind-label, author: data.header.name, date: none)
  set page(paper: "us-letter", margin: 0.5in)
  // Hyphenation would split words in the extracted text that ATS parsers read.
  set text(font: "New Computer Modern", size: base-size, lang: "en", hyphenate: false)
  set par(justify: true, leading: 0.65em, spacing: block-gap)
  set list(indent: 0.6em, body-indent: 0.5em, spacing: 0.7em)
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
  above: 20pt,
  below: 10pt,
  width: 100%,
  sticky: true,
  stroke: (bottom: 1pt),
  inset: (bottom: 2pt),
  text(tracking: 0.5pt, upper(title)),
)

#let role-heading(role) = {
  row(emph((role.title, role.subtitle).filter(part => part != none).join(", ")), role.period)
}

#let role-entry(role) = block(above: role-gap, {
  block(sticky: true, below: block-gap, {
    role-heading(role)
    if role.supervisor != none [Supervisor: #role.supervisor]
  })
  bullets(role.bullets)
})

#let organization-entry(org) = block(above: entry-gap, {
  let is-group = org.period != none
  block(sticky: true, below: block-gap, {
    row(strong(org.name), if is-group { org.period } else { org.location })
    if is-group and org.location != none { org.location }
  })
  pad(left: if is-group { 0.2in } else { 0pt }, org.roles.map(role-entry).join())
})

#let school-entry(school) = block(breakable: false, above: entry-gap, {
  row(strong(school.name), school.location)
  row(
    if school.honors == none { emph(school.degree) } else [#emph(school.degree), #school.honors],
    school.period,
  )
  bullets(school.bullets)
})

#let award-entry(award) = block(breakable: false, above: entry-gap, {
  row(
    strong(award.title),
    if award.date == none { award.organization } else [#award.organization, #award.date],
  )
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
