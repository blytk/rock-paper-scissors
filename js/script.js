// Declare the players score variables
// Create two variables in global scope, initiliaze to 0:
// humanScore
// computerScore 
let humanScore = 0;
let computerScore = 0;

// DOM vars
const humanDisplay = document.querySelector("#human-score");
const computerDisplay = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");
const winner = document.querySelector("#winner");

// WINNING POINTS
const WIN_POINTS = 5;

// Main execution
initializeButtons();

// Get Computer Choice
// Create a new function named getComputerChoice, that randomly returns "rock", "paper", "scissors"
function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber < 0.33) {
        computerChoice = "rock";
    } else if (randomNumber < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}


// Get Human Choice
// Create function getHumanChoice
function getHumanChoice() {
    // prompt user
    // validate prompt is "rock", "paper", "scissors"
    let humanChoice;

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt('Enter "rock", "paper" or "scissors": ').toLowerCase().trim();
    }
    return humanChoice;
    // test
    // console.log("humanChoice is: " + humanChoice);        
}

// Write the logic to play a single round
// Create a function playRound(humanChoice, computerChoice)
// Console.log round winner
// increment humanScore or computerScore


function playRound(humanChoice, computerChoice) {
    // human choice is "rock"
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Draw");
            roundResult.textContent = "Draw";
        } else if (computerChoice === "paper") {
            console.log("Computer wins! Paper beats rock");
            roundResult.textContent = "Computer wins! Paper beats rock";
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            roundResult.textContent = "You win! Rock beats scissors.";
            humanScore++;
        }
    // human choice is "paper"
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            roundResult.textContent = "You win! Paper beats rock";
            humanScore++;
        } else if (computerChoice === "paper") {
            roundResult.textContent = "Draw";
        } else if (computerChoice === "scissors") {
            console.log("Computer wins! Scissors beat paper");
            roundResult.textContent = "Computer wins! Scissors beat paper";
            computerScore++;
        }
    // human choice is "scissors"
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer wins! Rock beats scissors");
            roundResult.textContent = "Computer wins! Rock beats scissors";
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper");
            roundResult.textContent = "You win! Scissors beat paper";
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("Draw");
            roundResult.textContent = "Draw";
        }
    } else {
        console.log("Error");
        roundResult.textContent = "Error";
    }
    updateDisplay();
}

function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win the game!");
        winner.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
        winner.textContent = "Computer wins the game!";
    } else {
        console.log("Draw");
        winner.textContent = "Draw";
    }
}

// Initialize buttons
function initializeButtons() {
    // Select play buttons
    const playButtons = document.querySelectorAll("#buttons-div button");
    // Add event listener to each button
    playButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let humanOption = button.id;
            playRound(humanOption, getComputerChoice());
        })
    })
}

// Update the scoreboard with both players score
function updateDisplay() {
    humanDisplay.textContent = `Human Score: ${humanScore}`;
    computerDisplay.textContent = `Computer Score: ${computerScore}`;

    // If any of the players has enough points to win, display the winner of the game
    if (humanScore >= WIN_POINTS || computerScore >= WIN_POINTS) {
        if (humanScore >= WIN_POINTS) {
            winner.textContent = "You have won the game!";
        } else if (computerScore >= WIN_POINTS) {
            winner.textContent = "The computer has won the game!";
        }
    }
}