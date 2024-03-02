// Declare variable for game's choices
let choiceArray = ['rock','paper','scissors'];

// Create function for computer to randomly choose rock, paper or scissors
function computersPlay() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// Declare variable and store computer's choice
let computerChoice = computersPlay();
console.log(computerChoice);

// Create function to ask player to choose rock, paper or scissors
function playersPlay() {
    return prompt('Rock, paper or scissors?')
}

// Declare variable and store player's choice
let playerChoice = playersPlay();

// Test player input for correct response.
// Repeat until correct response
if (playerChoice.toLowerCase() === '') {
    console.log('No input')
} else if (playerChoice.toLowerCase() === 'rock') {
    console.log('rock')
} else if (playerChoice.toLowerCase() === 'paper') {
    console.log('paper')
} else if (playerChoice.toLowerCase() === 'scissors') {
    console.log('scissors')
}
else {
    console.log('Wrong input');
}

// Create function to compare computer's choice vs player's choice
// If same then tie
// If rock vs paper, rock wins
// If rock vs scissors, rock wins
// If paper vs scissors, scissors win
// Output result as string
// Create a function to play the game 5 times in a row, keep score
// and report winner or loser.