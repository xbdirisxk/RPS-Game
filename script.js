let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection.toLowerCase();
  if (player == "rock" && computer == "paper") {
    computerScore++;
    return "Lose, paper beat rock";
  } else if (player == "rock" && computer == "scissors") {
    playerScore++;
    return "Win, rock beat scissors";
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    return "Win, paper beat rock";
  } else if (player == "paper" && computer == "scissors") {
    computerScore++;
    return "Lose, scissors cut paper";
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    return "Lose, rock beat scissors";
  } else if (player == "scissors" && computer == "paper") {
    playerScore++;
    return "Win, scissors cut paper";
  } else if (player == "rock" && computer == "rock") return "it's tie";
  else if (player == "paper" && computer == "paper") return "it's tie";
  else if (player == "scissors" && computer == "scissors") return "it's tie";
  else return "wrong input";
}

function game(playerOption) {
  let userInput = playerOption;
  let play = playRound(userInput, computerPlay());
  p.textContent = play;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const p = document.querySelector(".container p");
const pScore = document.querySelector("h3 #player");
const cScore = document.querySelector("h3 #computer");
const finish = document.querySelector(".finish");
const refreshButton = document.querySelector("a div");

rock.addEventListener("click", () => {
  let option = "rock";
  if (playerScore < 3 && computerScore < 3) game(option);
  else if (playerScore >= 3) {
    finish.textContent = "You Win 💪";
    refreshButton.classList.add("reload-page");
  } else if (computerScore >= 3) {
    finish.textContent = "You Lose 😟";
    refreshButton.classList.add("reload-page");
  }
});
paper.addEventListener("click", () => {
  let option = "paper";
  if (playerScore < 3 && computerScore < 3) game(option);
  else if (playerScore >= 3) {
    finish.textContent = "You Win 💪";
    refreshButton.classList.add("reload-page");
  } else if (computerScore >= 3) {
    finish.textContent = "You Lose 😟";
    refreshButton.classList.add("reload-page");
  }
});
scissors.addEventListener("click", () => {
  let option = "scissors";
  if (playerScore < 3 && computerScore < 3) game(option);
  else if (playerScore >= 3) {
    finish.textContent = "You Win 💪";
    refreshButton.classList.add("reload-page");
  } else if (computerScore >= 3) {
    finish.textContent = "You Lose 😟";
    refreshButton.classList.add("reload-page");
  }
});
