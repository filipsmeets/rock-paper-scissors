// Declare variable for game's choices
let choiceArray = ['rock','paper','scissors'];

// Declare variable for computer and player choice
let computerChoice;
let playerChoice;

// Declare variable to keep scores and reset to 0 for the beginning of the game
let result;
let scoreComputer = 0;
let scorePlayer = 0;

// Create function for computer to randomly choose rock, paper or scissors
function computersPlay() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// Create function to ask player to choose rock, paper or scissors
function playersPlay() {
    return prompt('Rock, paper or scissors?')
}

// Create function to compare computer's choice vs player's choice
// If same then tie, rock wins from scissors, paper wins from rock, scissors win from paper
function compare(computerChoice,playerChoice) {
    if (computerChoice === 'rock' && playerChoice === 'rock') {
        return 'Tie';
    } else if (computerChoice === 'paper' && playerChoice === 'paper') {
        return 'Tie';
    } else if (computerChoice === 'scissors' && playerChoice === 'scissors') {
        return 'Tie';
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        return 'Player wins';
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' ) {
        return 'Computer wins';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'Computer wins';
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return 'Player wins';
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return 'Player wins';
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'Computer wins';
    }
}

// Create function to keep scores
function scores(result) {
    if (result === 'Tie') {
        scoreComputer++;
        scorePlayer++;        
    } else if (result === 'Computer wins') {
        scoreComputer++;
    } else {
        scorePlayer++;
    }
}


// Play the game 5 times in a row and keep score
for (let i = 0; i < 5; i++) {
    // Store computer's choice
    computerChoice = computersPlay();
    console.log(`Computer's choice is ${computerChoice}`);
    
    // Store player's choice
    playerChoice = (playersPlay()).toLowerCase();
    
    // Test if player input is correct. Do not continue until it is.
    while (playerChoice === '' || (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors')) {
        console.log('Wrong choice');
        playerChoice = (playersPlay()).toLowerCase();
    }
    
    console.log(`Player's choice is ${playerChoice}`);
    
    result = compare(computerChoice,playerChoice);
    console.log(result);
    scores(result);
    
    console.log(`Computer score is ${scoreComputer}`);
    console.log(`Player score is ${scorePlayer}`);

}

// Decide who has won the game
if (scoreComputer === scorePlayer) {
    console.log(`It's a tie!`);
} else if (scoreComputer > scorePlayer) {
    console.log('Computer has won the game');
} else {
    console.log('Player has won the game');
}