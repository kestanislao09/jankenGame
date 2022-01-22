//Variables to keep score for each player
let playerWin = 0;
let computerWin = 0;
let roundCount = 1;

//Resets the score and round count
function reset() {
    playerWin = 0;
    computerWin = 0;
    roundCount = 1;
    head.textContent = 'Let\'s play Rock, Paper, Scissors!';
    pScore.textContent = 'Player: 0';
    cScore.textContent = 'Computer: 0';
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
                head.textContent = `It's a draw, you both picked ${playerSelection.toLowerCase()}!`;
                break;
            case 'paper':
                computerWin++;
                roundCount++;
                head.textContent = `You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
                break;
            case 'scissors':
                playerWin++;
                roundCount++;
                head.textContent = `You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
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
                head.textContent = `You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
                break;
            case 'paper':
                roundCount++;
                head.textContent = `It's a draw, you both picked ${playerSelection.toLowerCase()}!`;
                break;
            case 'scissors':
                computerWin++;
                roundCount++;
                head.textContent = `You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`;                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computerWin++;
                roundCount++;
                head.textContent = `You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`;                break;
            case 'paper':
                playerWin++;
                roundCount++;
                head.textContent = `You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
                break;
            case 'scissors':
                roundCount++;
                head.textContent = `It's a draw, you both picked ${playerSelection.toLowerCase()}!`;
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else {
        return 'You must choose rock, paper, or scissors. Try again :c'
        
    }
}
const body = document.querySelector('body');
const head = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
const replayBtn = document.createElement('button');
replayBtn.classList.add('replayBtn');
replayBtn.textContent = 'Play Again?';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerWin === 5 || computerWin === 5) {
            console.log('*fart noises');
        } else {
            playRound (button.id, computerPlay());
            pScore.textContent = `Player: ${playerWin}`;
            cScore.textContent = `Computer: ${computerWin}`;
            if (playerWin === 5) {
                head.textContent = 'Congratulations! You\'ve won the game! You\'re an RPS master!';
                buttons.forEach((button) => {
                    button.classList.toggle('poof')
                });
                body.appendChild(replayBtn);
            } else if (computerWin === 5) {
                head.textContent = 'Oh no! You lost to the computer! Better luck next time!'
                buttons.forEach((button) => {
                    button.classList.toggle('poof')
                });
                body.appendChild(replayBtn);
            }
        }
    });
});

replayBtn.addEventListener('click', () => {
    reset();
    buttons.forEach((button) => {
        button.classList.toggle('poof')
    });
    body.removeChild(replayBtn);
});
