// Declare variable for game's choices
let choiceArray = ['rock','paper','scissors'];

// Declare variable to keep scores and reset to 0 for the beginning of the game
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
        scorePlayer++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors' ) {
        return 'Computer wins';
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'Computer wins';
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return 'Player wins';
        scorePlayer++;
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return 'Player wins';
        scorePlayer++;
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

    // return `Computer: ${scoreComputer} vs Player: ${scorePlayer}`;
}


// Play the game 5 times in a row, keep score and report who wins.
for (let i = 0; i < 5; i++) {
    // Declare variable and store computer's choice
    let computerChoice = computersPlay();
    console.log(`Computer's choice is ${computerChoice}`);
    
    // Declare variable and store player's choice
    let playerChoice = (playersPlay()).toLowerCase();
    console.log(`Player's choice is ${playerChoice}`);
    
    // Test if player input is correct. Do not continue until it is.
    while (playerChoice === '' || (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors')) {
        console.log('Wrong choice');
        playerChoice = (playersPlay()).toLowerCase();
        console.log(`Player's choice is ${playerChoice}`);
    }
    
    let result = compare(computerChoice,playerChoice);
    
    console.log(`Computer score is ${scoreComputer}`);
    console.log(`Player score is ${scorePlayer}`);

}