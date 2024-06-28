// Declare the players score variables
// Create two variables in global scope, initiliaze to 0:
// humanScore
// computerScore 

// Main execution

let numberOfRounds = playGame();

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



// Write the logic to play the entire game
// Create function playGame
// Move playRound function and score variables so that they're declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times
function playGame() {
    // rounds var
    let rounds = 0;

    // computerChoice and humanChoice var
    let computerChoice, humanChoice;

    // scores variables
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // human choice is "rock"
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
        // human choice is "paper"
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
        // human choice is "scissors"
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Computer wins! Rock beats scissors");
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

    while (rounds < 5) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("");
        rounds++;
    }
    declareWinner(humanScore, computerScore);
    return rounds;
}

function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("Draw");
    }
}