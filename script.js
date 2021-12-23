// ROCK PAPER SCISSORS

//create array with desired values

const hand = {

    rock: "rock", // hand[0]
    paper: "paper",  // hand[1]
    scissors: "scissors" // hand[2]
};

//keep score
 let playerScore = 0;
 let computerScore = 0;

// computerPlay() will return randomly either rock, paper or scissors.
function computerPlay(){
    const keys = Object.keys(hand);
    const result = keys[Math.floor(Math.random() * keys.length)];
    return result
}
//computerSelection
const computerSelection = computerPlay();
// img buttons
const buttons = document.querySelectorAll("input");
const article = document.querySelector("article");
const p = document.querySelector("p");

const newPara = document.createElement("p"); 
newPara.setAttribute('id', "added");
newPara.style.marginTop = "20px";
newPara.style.fontSize = "50px";
article.appendChild(newPara);

let playerSelection;
let countButtonClick = 0;
let choice = "";
        
//each time pressed, delete the previous paragraph
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
         countButtonClick++;
         playerSelection = e.target.value;
         choice = playRound(playerSelection, computerSelection);
         getTextContent();
        });
    });    
   // will update the output paragraph
function getTextContent(){
    let result = "";
    for (let i = 0; i < choice.length; i++){
        result += choice[i];
    }
    document.getElementById("added").textContent = result;
}
 
// playRound() will play one round and return either if player 
// wins or loses.
function playRound(playerSelection, computerSelection) {
    
  
    let player = playerSelection;
    const computer = computerSelection;
    //if they are the same = return it's a draw
    //if rock against scissors || paper goes against rock || scissors against paper
    //return "You Win! playerInput wins against computerInput"
    if (player === computer){
        return "It's a draw";
    }
    else if (player === hand.rock && computer === hand.scissors || player === hand.paper && computer === hand.rock || player === hand.scissors && computer === hand.paper){
        playerScore++;
       return `You Win! ` + player + ' beats ' + computer; 
    }
    else {

        computerScore++;
        return `You Lose! ` + computer + ' beats ' + player;
    }
    
       
}
//  // game() should (for now) play a 5 round game that keeps score and reports a winner or loser at the end.
//  function game() {
//      // while i is less than 5(5 rounds)
//      let i = 0;
     
//     // while(i < 5){
//     // //     //prompt player for input
//     //     const playerSelection = playerPlay();
//     //     console.log(playRound(playerSelection, computerSelection));
//     // //     //playRound()
//     // //     //return winner each time
//     //     i++;
//     // }
//     if (playerScore > computerScore){
//         console.log("YOU WIN");
//     } else if (computerScore > playerScore){
//         console.log("COMPUTER WINS");
//     } else {
//         console.log("Draw")
//     }
//  }




// //  game();