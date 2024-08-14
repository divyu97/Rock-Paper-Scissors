let humanScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");

score.textContent += 0;

const rock = document.querySelector(".choice1");
const paper = document.querySelector(".choice2");
const scissors = document.querySelector(".choice3");

const container = document.querySelector(".game-container");
const msg = document.querySelector(".message");

const computer = document.querySelector(".computer");
const human = document.querySelector(".human");

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

function playRound(h, c) {
    if (h === "rock" && c === "paper") {
        computerScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You lose!";
    } else if (h === "rock" && c === "scissors") {
        humanScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You win!";
    } else if (h === "paper" && c === "rock") {
        humanScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You win!";
    } else if (h === "paper" && c === "scissors") {
        computerScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You lose!";
    } else if (h === "scissors" && c === "rock") {
        humanScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You win!";
    } else if (h === "scissors" && c === "paper") {
        humanScore++;
        score.textContent = `Score: ${humanScore}`;
        msg.textContent = "You win!";
    } else {
        msg.textContent = "It's a tie!";
    }
}

function playGame() {
    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        computer.textContent = `Computer's Choice: `;
        human.textContent = `Your Choice: `;
        score.textContent = "Score: 0";
        msg.textContent = "Yay! You won the game!";
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        computer.textContent = `Computer's Choice: `;
        human.textContent = `Your Choice: `;
        score.textContent = "Score: 0";
        msg.textContent = "Aww! You lost the game!";
    }
}

rock.addEventListener("click", () => {
    let compchoice = getComputerChoice();
    computer.textContent = `Computer's Choice: ${compchoice.slice(0, 1).toUpperCase() + compchoice.slice(1)}`;
    human.textContent = `Your Choice: Rock`;
    playRound("rock", compchoice);
    playGame();
});

paper.addEventListener("click", () => {
    let compchoice = getComputerChoice();
    computer.textContent = `Computer's Choice: ${compchoice.slice(0, 1).toUpperCase() + compchoice.slice(1)}`;
    human.textContent = `Your Choice: Paper`;
    playRound("paper", compchoice);
    playGame();
});

scissors.addEventListener("click", () => {
    let compchoice = getComputerChoice();
    computer.textContent = `Computer's Choice: ${compchoice.slice(0, 1).toUpperCase() + compchoice.slice(1)}`;
    human.textContent = `Your Choice: Scissors`;
    playRound("scissors", compchoice);
    playGame();
});