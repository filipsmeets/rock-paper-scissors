// Declare variable for game's choices
let choiceArray = ['rock','paper','scissors'];

// Create function for computer to randomly choose rock, paper or scissors
function computersPlay () {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

// Declare variable to store computer's choice
let computerChoice = computersPlay();
console.log(computerChoice);

// Ask player for rock, paper or scissors
let playerChoice = playerChoice = (prompt('Choose between rock, paper or scissors')).toLowerCase();

if (!playerChoice) {
    alert('Wrong input.');
    playerChoice = (prompt('Choose between rock, paper or scissors')).toLowerCase();
}
else if (playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
    alert('Wrong input.');
    playerChoice = (prompt('Choose between rock, paper or scissors')).toLowerCase();
}

console.log(playerChoice);

// Save player's choice in variable
// Create function to compare computer's choice vs player's choice
// If same then tie
// If rock vs paper, rock wins
// If rock vs scissors, rock wins
// If paper vs scissors, scissors win
// Output result as string
// Create a function to play the game 5 times in a row, keep score
// and report winner or loser.