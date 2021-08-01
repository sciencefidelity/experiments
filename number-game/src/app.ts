"use strict"

let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses")
const lastResult = <HTMLParagraphElement>document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guessSubmit = <HTMLInputElement>document.querySelector(".guessSubmit")
const guessField = <HTMLInputElement>document.querySelector(".guessField")

let guessCount = 1
let resetButton: HTMLButtonElement
guessField.focus()

function checkGuess() {
  if (
    guesses === null ||
    guessField === null ||
    lastResult === null ||
    lowOrHi === null
  ) {
    alert("Oops, some HTML elements don't exist!")
  } else {
    let userGuess = Number(guessField.value)
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses: "
    }
    guesses.textContent += userGuess + " "
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!"
      lastResult.style.backgroundColor = "green"
      lowOrHi.textContent = ""
      setGameOver()
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!"
      setGameOver()
    } else {
      lastResult.textContent = "Wrong!"
      lastResult.style.backgroundColor = "red"
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!"
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!"
      }
    }

    guessCount++
    guessField.value = ""
    guessField.focus()
  }
}

guessSubmit!.addEventListener("click", checkGuess)

function setGameOver() {
  if (guessField === null) {
    alert("Oops, some HTML elements don't exist!")
  } else {
    guessField.disabled = true
    guessField.disabled = true
    resetButton = document.createElement("button")
    resetButton.style.display = "block"
    resetButton.style.margin = "auto"
    resetButton.textContent = "Start new game"
    document.body.append(resetButton)
    resetButton.addEventListener("click", resetGame)
  }
}

function resetGame() {
  if (
    guessField === null ||
    guessSubmit === null ||
    lastResult === null ||
    resetButton.parentNode === null
  ) {
    alert("Oops, some HTML elements don't exist!")
  } else {
    guessCount = 1

    const resetParas = document.querySelectorAll(".resultParas p")
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = ""
    }

    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ""
    guessField.focus()

    lastResult.style.backgroundColor = "white"

    randomNumber = Math.floor(Math.random() * 100) + 1
  }
}
