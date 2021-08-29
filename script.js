"use strict";

const againBtn = document.querySelector(".again");
const showedNum = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".Message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".Highscore");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalMessage = document.querySelector(".modal-Message");

let guessed = Math.trunc(Math.random() * 20) + 1;
console.log(guessed);
let scores = 20;

const clear = function () {
  guessed = Math.trunc(Math.random() * 20) + 1;

  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  scores = 20;
  score.textContent = scores;
  showedNum.textContent = "?";
  displayMessage("Start guessing....");
  document.querySelector("body").style.backgroundColor = "#222";
  showedNum.style.width = "9rem";
  guess.value = "";
  message.style.visibility = "visible";
};

const displayMessage = function (messages) {
  message.textContent = messages;
};

const displayWinner = function (messages) {
  modalMessage.textContent = messages;
};

highScore.textContent = 0;

checkBtn.addEventListener("click", function () {
  let value = Number(guess.value);

  if (value !== guessed) {
    if (scores != 0) {
      score.textContent = --scores;
    } else {
      scores = 0;
      score.textContent = scores;
    }
  }

  if (value != 0) {
    let inputMessage = value > guessed ? "📈 Too high" : "📉 Too low";
    displayMessage(inputMessage);
  }

  if (value === 0) {
    displayMessage("⛔️ No number");
  } else if (value === guessed) {
    displayWinner("🎉 Correct Number!");
    showedNum.textContent = value;
    document.querySelector("body").style.backgroundColor = "green";
    showedNum.style.width = "15rem";

    if (Number(highScore.textContent) < Number(score.textContent)) {
      highScore.textContent = score.textContent;
    }
    // Adding a modal
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    message.style.visibility = "hidden";
  }

  if (Number(score.textContent) === 0) {
    displayWinner("💥 You lost the game!");

    // Adding a modal
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    message.style.visibility = "hidden";
  }
});

againBtn.addEventListener("click", clear);
