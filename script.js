// ROCK PAPER SCISSORS
// NO GUI AT THE MOMENT(SUBJECT TO CHANGE)

//create array with desired values

const hand = [
    'rock', // hand[0]
    'paper',  // hand[1]
    'scissors' // hand[2]
];

// computerPlay() will return randomly either rock, paper or scissors.
function computerPlay(){
    let result;
    result = hand[Math.floor(Math.random() * hand.length)];
    return result
}
// playerPlay() will return the input from the player
function playerPlay(){
    let input;
    input = prompt("What is your choice"); 
    return input;
}

const computerSelection = computerPlay();
// playRound() will play one round and return either if player 
// wins or loses.
function playRound(playerSelection, computerSelection) {
    // error check
    if (typeof playerSelection !== 'string'){
        return  "input a string"
    }
    // case-insensitive (convert to lowercase)
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    //if they are the same = return it's a draw
    //if rock against scissors || paper goes against rock || scissors against paper
    //return "You Win! playerInput wins against computerInput"
    if (player === computer){
        return "It's a draw";
    }
    else if (player === hand[0] && computer === hand[2] || player === hand[1] && computer === hand[0] || player === hand[2] && computer === hand[1]){
        playerScore++;
       return `You Win! ` + player + ' beats ' + computer; 
    }
    else {

        computerScore++;
        return `You Lose! ` + player + ' beats ' + computer;
    }
    
       
}

 // game() should (for now) play a 5 round game that keeps score and reports a winner or loser at the end.
 function game() {
     // while i is less than 5(5 rounds)
     let i = 0;
     
 //keep score
 let playerScore = 0;
 let computerScore = 0;
    while(i < 5){
    //     //prompt player for input
        const playerSelection = playerPlay();
        console.log(playRound(playerSelection, computerSelection));
    //     //playRound()
    //     //return winner each time
        i++;
    }
    if (playerScore > computerScore){
        console.log("YOU WIN");
    } else if (computerScore > playerScore){
        console.log("COMPUTER WINS");
    } else {
        console.log("Draw")
    }
 }

 game();