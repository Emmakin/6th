var gameContent = ['rock', 'paper', 'scissor'];

 function getComputerChoice() {
    return gameContent[Math.floor(Math.random() * gameContent.length)] 
  };
 
   function playRound(){
      
      if (computerSelection === playerSelection){
         console.log("Draw");
         let i = 0;
         let j = 0; 
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

   // for (let i = 0, j = 0; 
   //          i <= 5 ||  j <= 5; 
   //          i++, j++) {
   //             console.log(i,j)
      
   // }



 
  const computerSelection = getComputerChoice();
  console.log( `Computer picked ${computerSelection}`);
  let playerSelection = prompt('rock, paper or scissors');
  console.log(`You picked ${playerSelection.toLowerCase()}`);

  console.log(playRound());
