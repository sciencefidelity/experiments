'use strict'

const input = document.querySelector<HTMLTextAreaElement>('#input')!
const output = document.querySelector<HTMLDivElement>('#output')!

input?.addEventListener('input', function(e) {
  const target = (<HTMLTextAreaElement>e.target)
  const lgn = target.value.length
  if (lgn === 0 && output !== null) {
    output.innerHTML = `&nbsp;`
  } else if (lgn === 1 && output !== null) {
    output.innerHTML = `${lgn} character`
  } else if (lgn > 1 && output !== null) {
    output.innerHTML = `${lgn} characters`
  }
})
