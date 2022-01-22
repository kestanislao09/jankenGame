//Variables to keep score for each player
let playerWin = 0;
let computerWin = 0;
let roundCount = 1;

//Resets the score and round count
function reset() {
    playerWin = 0;
    computerWin = 0;
    roundCount = 1;
}

//function for the computer player's choices
function computerPlay() {
    const rpsChoices = ['rock', 'paper', 'scissors']
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
}

//Single round of RPS
//This could definitely use some optimization, but I'll add it in later.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                roundCount++;
                console.log(`It's a draw, you both picked ${playerSelection.toLowerCase()}!`);
                break;
            case 'paper':
                computerWin++;
                roundCount++;
                console.log(`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
                break;
            case 'scissors':
                playerWin++;
                roundCount++;
                console.log(`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                playerWin++;
                roundCount++;
                console.log(`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
                break;
            case 'paper':
                roundCount++;
                console.log(`It's a draw, you both picked ${playerSelection.toLowerCase()}!`);
                break;
            case 'scissors':
                computerWin++;
                roundCount++;
                console.log(`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computerWin++;
                roundCount++;
                console.log(`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);                break;
            case 'paper':
                playerWin++;
                roundCount++;
                console.log(`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
                break;
            case 'scissors':
                roundCount++;
                console.log(`It's a draw, you both picked ${playerSelection.toLowerCase()}!`);
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else {
        return 'You must choose rock, paper, or scissors. Try again :c'
        
    }
}

const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound (button.id, computerPlay());
        pScore.textContent = `Player: ${playerWin}`
        cScore.textContent = `Computer: ${computerWin}` 
    });
});
