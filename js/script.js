// Main execution

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// Declare the players score variables
// Create two variables in global scope, initiliaze to 0:
// humanScore
// computerScore 

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);

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
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Draw");
        } else if (computerChoice === "paper") {
            console.log("Computer wins! Paper beats rock");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("Draw");
        } else if (computerChoice === "scissors") {
            console.log("Computer wins! Scissors beat paper")
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer wins! Rock beat scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("Draw");
        }
    } else {
        console.log("Error");
    }
}


// Write the logic to play the entire game
// Create function playGame
// Move playRound function and score variables so that they're declared inside of the new playGame function
// Play 5 rounds by calliung playRound 5 times