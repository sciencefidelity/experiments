'use strict'

const randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHIgh')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('guessField')

let guessCount = 1
let resetButton

function checkGuess() {
  alert('I\'m a placeholder')
}

