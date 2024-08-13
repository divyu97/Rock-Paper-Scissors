let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.round(Math.random() * 100);
    if (x >= 0 && x < 30) {
        return "rock";
    } else if (x >= 30 && x < 60) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock or Paper or Scissors").toLowerCase();
    return choice;
}

function playRound(h, c) {
    if (h === "rock" && c === "paper") {
        computerScore++;
        console.log("You lose!");
    } else if (h === "rock" && c === "scissors") {
        humanScore++;
        console.log("You win!")
    } else if (h === "paper" && c === "rock") {
        humanScore++;
        console.log("You win!")
    } else if (h === "paper" && c === "scissors") {
        computerScore++;
        console.log("You lose!")
    } else if (h === "scissors" && c === "rock") {
        humanScore++;
        console.log("You win!")
    } else if (h === "scissors" && c === "paper") {
        humanScore++;
        console.log("You win!")
    } else {
        console.log("It's a tie!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("Yay! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Aww! You lost the game!");
    } else {
        console.log("The game got tied!");
    }
}

playGame();