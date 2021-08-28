let humanScore = 0;         // Variable to keep track of the players score
let computerScore = 0;      // Variable to keep track of the computers score
let currentRoundNumber = 1; // Variable to track how many games have been played

// Function to generate secret integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// Function to determine winner ( true : player wins || false : computer wins)
function compareGuesses(humanGuessInput, computerGuess, target) {
    if (Math.abs(humanGuessInput - target) <=  Math.abs(computerGuess - target)) {
        return true;
    } if (Math.abs(humanGuessInput - target) >  Math.abs(computerGuess - target)){
        return false;
    }
}

// Function to increase the winners score after each round
const updateScore = winner => winner === "human" ? humanScore++ : computerScore++;

// Function to advance game to the next round
const advanceRound = () => currentRoundNumber++;
