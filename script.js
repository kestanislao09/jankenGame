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
                return 'It\'s a draw! You both picked Rock.';
                break;
            case 'paper':
                return 'You lose! Paper beats Rock.';
                break;
            case 'scissors':
                return 'You Win! Rock beats Scissors.';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'You Win! Paper beats Rock.';
                break;
            case 'paper':
                return 'It\'s a draw! You both picked Paper.';
                break;
            case 'scissors':
                return 'You Lose! Scissors beats paper.';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'You Lose! Rock beats Scissors.';
                break;
            case 'paper':
                return 'You Win! Scissors beats Paper.';
                break;
            case 'scissors':
                return 'It\'s a draw! You both picked Scissors.';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else {
        return 'You must choose rock, paper, or scissors. Try again :c'
    }
}

