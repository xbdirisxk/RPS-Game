let options = ["rock", "paper", "scissors"];

function computerPlay() {
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection.toLowerCase();
  if (player == "rock" && computer == "paper")
    return "you lose, paper beat rock";
  else if (player == "rock" && computer == "scissors")
    return "you win, rock beat scissors";
  else if (player == "rock" && computer == "rock") return "it's tie";
  else if (player == "paper" && computer == "rock")
    return "you win, paper beat rock";
  else if (player == "paper" && computer == "scissors")
    return "you lose, scissors cut paper";
  else if (player == "paper" && computer == "paper") return "it's tie";
  else if (player == "scissors" && computer == "rock")
    return "you lose, rock beat scissors";
  else if (player == "scissors" && computer == "paper")
    return "you win, scissors cut paper";
  else if (player == "scissors" && computer == "scissors") return "it's tie";
  else return "wrong input";
}
let count = 1;
function game() {
  let userInput = prompt("choose rock, paper or scissors:");
  console.log(playRound(userInput, computerPlay()));

  count += 0;
  if (count < 5) game();
}
