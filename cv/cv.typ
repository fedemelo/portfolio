#import "/shared/typst/common.typ": setup, render-sections

#let data = json("cv.json")
#show: setup.with(data)

#align(center)[
  #text(size: 20pt, weight: "bold", smallcaps(data.header.name))
  #v(2pt)
  #line(length: 80%, stroke: 1.2pt)
  #v(2pt)
  #show link: set text(fill: rgb("#1b7627"))
  #data.header.contacts.map(contact => [#contact.label: #link(contact.url, contact.text)]).join(h(2em))
]

#render-sections(data.sections)
