#import "/shared/typst/common.typ": setup, render-header, render-sections

#let data = json("resume.json")
#show: setup.with(data)

#render-header(data.header)
#render-sections(data.sections)
