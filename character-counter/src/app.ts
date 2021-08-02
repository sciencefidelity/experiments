"use strict"

const input = document.querySelector("#input") as HTMLTextAreaElement
const output = document.querySelector("#output") as HTMLDivElement

input?.addEventListener("input", function (e) {
  const target = <HTMLTextAreaElement>e.target
  const lgn = target.value.length
  if (lgn === 0 && output !== null) {
    output.innerHTML = "&nbsp;"
  } else if (lgn === 1 && output !== null) {
    output.innerHTML = `${lgn} character`
  } else if (lgn > 1 && output !== null) {
    output.innerHTML = `${lgn} characters`
  }
})
