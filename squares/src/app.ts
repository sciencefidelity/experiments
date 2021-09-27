const square0 = document.querySelector(".color-0") as HTMLDivElement
const square1 = document.querySelector(".color-1") as HTMLDivElement
const square2 = document.querySelector(".color-2") as HTMLDivElement
const square3 = document.querySelector(".color-3") as HTMLDivElement
const square4 = document.querySelector(".color-4") as HTMLDivElement
const square5 = document.querySelector(".color-5") as HTMLDivElement
const square6 = document.querySelector(".color-6") as HTMLDivElement
const square7 = document.querySelector(".color-7") as HTMLDivElement
const square8 = document.querySelector(".color-8") as HTMLDivElement
const square9 = document.querySelector(".color-9") as HTMLDivElement

let i = 0

// split the digits into an array, reverse it and select the first number

function splitToDigit(n: number) {
  return [...(n + "")].map(Number).reverse()[0]
}

// counter timed to change the color number of each square

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorChange = setInterval(() => {
  if (i === 10) {
    i = 0
  }
  square0.className = `color-${splitToDigit(i + 0)}`
  square1.className = `color-${splitToDigit(i + 1)}`
  square2.className = `color-${splitToDigit(i + 2)}`
  square3.className = `color-${splitToDigit(i + 3)}`
  square4.className = `color-${splitToDigit(i + 4)}`
  square5.className = `color-${splitToDigit(i + 5)}`
  square6.className = `color-${splitToDigit(i + 6)}`
  square7.className = `color-${splitToDigit(i + 7)}`
  square8.className = `color-${splitToDigit(i + 8)}`
  square9.className = `color-${splitToDigit(i + 9)}`
  i++
}, 50)
