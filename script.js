// It's mess here, so if can do better feel free to change anything

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let options = [
    "rock",
    "paper",
    "scissors",
    "rock",
    "paper",
    "scissors",
    "rock",
    "paper",
    "scissors",
  ];
  let index = Math.floor(Math.random() * 9);
  return options[index];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection;
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
  let computerOption = computerPlay();
  let play = playRound(userInput, computerOption);
  if (computerOption == "rock")
    computerWeapon.setAttribute("src", "images/rock.svg");
  else if (computerOption == "paper")
    computerWeapon.setAttribute("src", "images/paper.svg");
  else if (computerOption == "scissors")
    computerWeapon.setAttribute("src", "images/scissors.svg");

  winLose.textContent = play;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerWeapon = document.querySelector("#player-img");
const computerWeapon = document.querySelector("#computer-img");

const winLose = document.querySelector(".win-lose > h2");

const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#computer-score");

const playAgain = document.querySelector(".scores > a > .unvisible");

// onclick events
rock.addEventListener("click", () => {
  let option = "rock";
  if (playerScore < 3 && computerScore < 3) {
    playerWeapon.setAttribute("src", "images/rock.svg");
    game(option);
  } else if (playerScore >= 3) {
    winLose.textContent = "You Win 💪";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  } else if (computerScore >= 3) {
    winLose.textContent = "You Lose 😞";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  }
});
paper.addEventListener("click", () => {
  let option = "paper";
  if (playerScore < 3 && computerScore < 3) {
    playerWeapon.setAttribute("src", "images/paper.svg");
    game(option);
  } else if (playerScore >= 3) {
    winLose.textContent = "You Win 💪";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  } else if (computerScore >= 3) {
    winLose.textContent = "You Lose 😞";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  }
});
scissors.addEventListener("click", () => {
  let option = "scissors";
  if (playerScore < 3 && computerScore < 3) {
    playerWeapon.setAttribute("src", "images/scissors.svg");
    game(option);
  } else if (playerScore >= 3) {
    winLose.textContent = "You Win 💪";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  } else if (computerScore >= 3) {
    winLose.textContent = "You Lose 😞";
    winLose.classList.add("winner");
    playAgain.classList.add("finished");
  }
});
