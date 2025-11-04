function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${humanSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties=0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            humanScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }else{
            ties++;
        }
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}, Ties: ${ties}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
