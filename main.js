var gameContent = ['rock', 'paper', 'scissor'];
let i = 0;
let j = 0;

 function getComputerChoice() {
    return gameContent[Math.floor(Math.random() * gameContent.length)] 
  };
 
   function playRound(){
      
      if (computerSelection === playerSelection){
         console.log("Draw");
      } else if (computerSelection == 'scissor' && playerSelection == 'rock'){
         console.log("You won! rock beats scissor")
         j ++;
      } else if (computerSelection == 'paper' && playerSelection == 'rock'){
         console.log("You lose! paper beats rock")
         i++;
      } else if (computerSelection == 'rock' && playerSelection == 'scissor'){
         console.log("You lose! rock beats scissor")
         i++;
      }else if (computerSelection == 'paper' && playerSelection == 'scissor'){
         console.log("You win! scissor beats paper")
         j++;
      }else if (computerSelection == 'rock' && playerSelection == 'paper'){
         console.log("You win! paper beats rock")
         j++;
      }else if (computerSelection == 'scissor' && playerSelection == 'paper'){
         console.log("You lose! paper beats rock")
         i++;
      }
      else {
         console.log("try again")
      }
   }; 

   
            
   function cancelGame(){

      if (i <= 5 ||  j <= 5){
      console.log(i,j)}
   }; 
              
      




 
  const computerSelection = getComputerChoice();
  console.log( `Computer picked ${computerSelection}`);
  let playerSelection = prompt('rock, paper or scissors');
  console.log(`You picked ${playerSelection.toLowerCase()}`);

  console.log(playRound());
