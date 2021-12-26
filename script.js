// ROCK PAPER SCISSORS

//create array with desired values
const game = () => {
    
const hand = {

    rock: "rock", // hand[0]
    paper: "paper",  // hand[1]
    scissors: "scissors" // hand[2]
};

//keep score
 let playerScore = 0;
 let computerScore = 0;
 let round = 0;

// computerPlay() will return randomly either rock, paper or scissors.
function computerPlay(){
    const keys = Object.keys(hand);
    const result = keys[Math.floor(Math.random() * keys.length)];
    return result
}
//computerSelection
// img buttons
const article = document.querySelector("article");

const newPara = document.createElement("p"); 
newPara.setAttribute('id', "added");
newPara.style.marginTop = "20px";
newPara.style.fontSize = "50px";
article.appendChild(newPara);


const playGame = () => {
    
// assign variables for all options
// assign variable an array with the options
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerChoice = [rockBtn, paperBtn, scissorsBtn];
  //function to start playing
    playerChoice.forEach(option => {
        option.addEventListener("click", function (e) {
                round++;
                const winner_result = document.querySelector(".winner");
                winner_result.textContent = "Winner?"
                //assign value for function
                const playerSelection = e.target.value;
                const computerSelection = computerPlay();
                //function to check who wins
                playRound(playerSelection, computerSelection);
                //call gameOver function after 5 moves
                if (round === 5) {
                    gameOver();
                }
            });

    });
}
 
// playRound() will play one round and return either if player 
// wins or loses.
const playRound = (playerSelection, computerSelection) => {
    
    const playerScoreBoard = document.querySelector(".playerScore");
    const computerScoreBoard = document.querySelector(".computerScore");
    let result = ""; 
    let player = playerSelection;
    const computer = computerSelection;
    //if they are the same = return it's a draw
    //if rock against scissors || paper goes against rock || scissors against paper
    //return "You Win! playerInput wins against computerInput"
    if (player === computer){
        result = "It's a draw";
        printWinner(result);
    }
    else if (player === hand.rock && computer === hand.scissors || player === hand.paper && computer === hand.rock || player === hand.scissors && computer === hand.paper){
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        result = `You Win! ` + player + ' beats ' + computer;
        printWinner(result);
    }
    else {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result = `You Lose! ` + computer + ' beats ' + player;
        printWinner(result);
    }
       
}
//function run when the game is over
const gameOver = () => {
    
    const resultPlayer = document.querySelector(".playerScore");
    const resultComputer = document.querySelector(".computerScore");
    const resultOutput = document.querySelector(".winner");
    
    if (playerScore > computerScore){
        resultOutput.textContent = "You Win, Start again by playing";
        resultOutput.style.fontSize = "40px"
        playerScore = 0;
        computerScore = 0;
        round = 0;
        resultPlayer.textContent = "0";
        resultComputer.textContent = "0";
    } else if (playerScore < computerScore){
        resultOutput.textContent = "You Lose, Start again by playing";
        resultOutput.style.fontSize = "40px";
        playerScore = 0;
        computerScore = 0;
        round = 0;
        resultPlayer.textContent = "0";
        resultComputer.textContent = "0";
    } else {
        resultOutput.textContent = "Tie, Start again by playing"
        resultOutput.Style.fontSize = "30px";
        playerScore = 0;
        computerScore = 0;
        round = 0;
        resultPlayer.textContent = "0";
        resultComputer.textContent = "0";
    }
    

}
playGame();

   // will update the output paragraph
function printWinner(str){
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += str[i];
    }
    document.getElementById("added").textContent = result;
}
}
game();

