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

//Function to start the game
function startDaGame() {
    let gameStart = prompt('Would you like to start the game?');
    if (gameStart.toLowerCase() === 'yes') {
        alert('Cool, let\'s start the game! Good luck!');
        reset();
        game();
    } else if (gameStart.toLowerCase() === 'no') {
        alert('Oh... there isn\'t much else to do here..');
        return startDaGame();
    } else {
        alert('Please only select "yes" or "no"...');
        return startDaGame();
    }
}

//Replay Function (edited startDaGame prettymuch..) Called at the end of each game function.
function replayDaGame() {
    let gameStart = prompt('Would you like to play another game?');
    if (gameStart.toLowerCase() == 'yes') {
        alert('Cool, let\'s start the game! Good Luck!');
        reset();
        game();
    } else if (gameStart.toLowerCase() == 'no') {
        alert('Oh... Welp there isn\'t much else to do here..');
        return replayDaGame();
    } else {
        alert('Please only select "yes" or "no"...');
        return replayDaGame();
    }
}

//Single round of RPS
//This could definitely use some optimization, but I'll add it in later.
function rpsResult(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'draw';
                break;
            case 'paper':
                return 'lose';
                break;
            case 'scissors':
                return 'win';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'win';
                break;
            case 'paper':
                return 'draw';
                break;
            case 'scissors':
                return 'lose';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'lose';
                break;
            case 'paper':
                return 'win';
                break;
            case 'scissors':
                return 'draw';
                break;
            default:
                return "Uh oh.. something went wrong here.";
                //Just in case something breaks with the computer play function..
        }
    } else {
        return 'You must choose rock, paper, or scissors. Try again :c'
        
    }
}

function playRound(playerSelection, computerSelection) {
    let playerThrow = playerSelection
    let computerThrow = computerSelection
    let result = rpsResult(playerThrow.toLowerCase(), computerThrow.toLowerCase());
    switch(result) { //Switch to simultaneously update score and print a dialogue
        case 'win':
            playerWin++;
            roundCount++;
            alert(`You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`);
            break;
        case 'lose':
            computerWin++;
            roundCount++;
            alert(`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`);
            break;
        case 'draw':
            roundCount++;
            alert(`It's a draw, you both picked ${playerSelection.toLowerCase()}!`);
            break;
        default:
            alert('You gotta pick rock, paper, or scissors...');
            return playRound(prompt(`Round ${roundCount.toString()}: Please pick rock, paper, or scissors.`), computerPlay());
    }
}

//5 round game of RPS. Maybe future update to adjust game rounds.
function game() {
    
    for (i=1;i<=5;i++) { //Loops through rounds until 5 have been played.
        playRound(prompt(`Round ${roundCount.toString()}: Please pick rock, paper, or scissors.`), computerPlay());
        
        //Prints the updated score after the result is calculated
        alert(`The score is now: ${playerWin.toString()} to ${computerWin.toString()}!`);
    }
        
        
    //End of the game, prints a win/lose/draw dialogue + the final scores.
    if (playerWin > computerWin) {
        alert('Congratulations on winning! You are an RPS master!');
        alert(`Final Score: Player:${playerWin.toString()} RPSBot:${computerWin.toString()}`);
        replayDaGame();
    } else if (playerWin < computerWin) {
        alert('You\'ve lost! Better luck next time!');
        alert(`Final Score: Player:${playerWin.toString()} RPSBot:${computerWin.toString()}`);
        replayDaGame();
    } else if (playerWin === computerWin) {
        alert('What a close game! It\'s a draw!');
        alert(`Final Score: Player:${playerWin.toString()} RPSBot:${computerWin.toString()}`);
        replayDaGame();
    } else {
        alert('Ah crap, Something went wrong!'); //another just in case
    }
}
//Instructions will be obsolete once I put in a GUI
alert('Welcome to my RPS game! Hit OK to continue :D');


//Starts the game, only called once.
startDaGame();

