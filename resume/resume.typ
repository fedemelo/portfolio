#import "/shared/typst/common.typ": setup, render-sections

#let data = json("resume.json")
#show: setup.with(data)

#align(center)[
  #text(size: 24pt, data.header.name)
  #v(-2pt)
  #data.header.contacts.map(contact => link(contact.url, contact.text)).join(" | ")
]

#render-sections(data.sections)
