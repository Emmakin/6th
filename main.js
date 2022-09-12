var gameContent = ['rock', 'paper', 'scissor'];
// const playerSelection = "rock";


//  function  getUserPick(){
//     let playerSelection = document.querySelector("#userPick").value;
//     return playerSelection;
//  } 
//  console.log(getUserPick());

let playerSelection = prompt();
console.log(playerSelection.toLowerCase());

 function getComputerChoice() {
    return gameContent[Math.floor(Math.random() * gameContent.length)] 
  };
 
   function playRound(){
      
      if (computerSelection === playerSelection){
         console.log("Draw");
      } else if (computerSelection == 'scissor' && playerSelection == 'rock'){
      console.log("You won! rock beats scissor")
      } else if (computerSelection == 'paper' && playerSelection == 'rock'){
         console.log("You lose! paper beats rock")
      } else {
         console.log("try again")
      }
   }; 



 
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound());
