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

function game() {
  while (playerScore < 3 && computerScore < 3) {
    let userInput = prompt("choose rock, paper or scissors:");
    let play = playRound(userInput, computerPlay());

    if (play == "wrong input") {
      console.log("wrong input, pls choose from the above");
      continue;
    }
    console.log(play);
    console.log(`player ${playerScore}-${computerScore} computer`);
  }
}
