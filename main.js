function playRound(playerSelection, computerSelection) {
    
  }
   
 function getComputerChoice() {
    var gameContent = ['Rock', 'Paper', 'Scissor'];
   function random(){
    return gameContent[Math.floor(Math.random() * gameContent.length)]
   }
   random();
  };
   

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));