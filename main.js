var gameContent = ['rock', 'paper', 'scissor'];


//After 5 days of studing javascript function, loop and arrays better
 function getComputerChoice() {
    return gameContent[Math.floor(Math.random() * gameContent.length)] 
  };

  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
 

  function playRoundEvent() {
    let playerScore = 0;
    let computerScore = 0;

         if(computerSelection == 'scissor' && playerSelection == 'rock' ||
         computerSelection == 'paper' && playerSelection == 'scissor'||
         computerSelection == 'rock' && playerSelection == 'paper'){
            console.log(`You won! ${playerSelection} beat ${computerSelection}`);
            console.log(playerScore += 1, computerScore);
      } 
      if(computerSelection == 'paper' && playerSelection == 'rock' ||
               computerSelection == 'rock' && playerSelection == 'scissor'||
               computerSelection == 'scissor' && playerSelection == 'paper'){
        console.log(`You lost!, ${computerSelection} beat ${playerSelection}`);
        console.log(playerScore, computerScore += 1); 
      } 
      else {
         console.log(`Draw!, you and computer picked ${computerSelection}`)
      }
      console.log(`Your Score:${playerScore}  Computer Score:${computerScore}`)
      console.log(`keep playing`); 

  
    };


    for(let round = 1; round < 5; round++){
      console.log(` Round ${round}`);
      console.log(playRoundEvent());
    }
  

   

    // console.log(playRoundEvent());            
      
 
 
//   console.log( `Computer picked ${computerSelection}`);
//window.prompt('rock, paper or scissors');
//   console.log(`You picked ${playerSelection.toLowerCase()}`);

//   console.log(playRound());

  //My initial approach
   // function playRound(){
      
   //    if (computerSelection === playerSelection){
   //       console.log("Draw");
   //    } else if (computerSelection == 'scissor' && playerSelection == 'rock'){
   //       console.log("You won! rock beats scissor")
   //    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
   //       console.log("You lose! paper beats rock")
   //    } else if (computerSelection == 'rock' && playerSelection == 'scissor'){
   //       console.log("You lose! rock beats scissor")
   //    }else if (computerSelection == 'paper' && playerSelection == 'scissor'){
   //       console.log("You won! scissor beats paper")
   //    }else if (computerSelection == 'rock' && playerSelection == 'paper'){
   //       console.log("You won! paper beats rock")
   //    }else if (computerSelection == 'scissor' && playerSelection == 'paper'){
   //       console.log("You lose! paper beats rock")
   //    }
   //    else {
   //       console.log("try again")
   //    } return console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}`)
   // }; 
