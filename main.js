var gameContent = ['rock', 'paper', 'scissor'];

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
      } else if (computerSelection == 'rock' && playerSelection == 'scissor'){
         console.log("You lose! rock beats scissor")
      }else if (computerSelection == 'paper' && playerSelection == 'scissor'){
         console.log("You win! scissor beats paper")
      }else if (computerSelection == 'rock' && playerSelection == 'paper'){
         console.log("You win! paper beats rock")
      }else if (computerSelection == 'scissor' && playerSelection == 'paper'){
         console.log("You lose! paper beats rock")
      }
      else {
         console.log("try again")
      }
   }; 

              
      
 
  const computerSelection = getComputerChoice();
  console.log( `Computer picked ${computerSelection}`);
  let playerSelection = prompt('rock, paper or scissors');
  console.log(`You picked ${playerSelection.toLowerCase()}`);

  console.log(playRound());
