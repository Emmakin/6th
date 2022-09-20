const choices = ["rock", "paper", "scissor"];
const winners =[];

function game(){
  for (let i = 1; i<= 5; i++){
    playRound(i);
  }
  logwins();
}

function playRound(round){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
  let input = prompt("Type Rock, Paper , or Scissors");
  while(input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors, Spelling needs to be exact, but capitilization dosent matter"
    );
      while (input == null){
        input = prompt("Type Rock, Paper, or Scissors");
      }
      input = input.toLowerCase();
      check = validateInput(input);
  }
  return input
}

function computerChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice){
  return choices.includes(choice);
}



function checkWinner(choiceP, choiceC){
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceC === "scissor" && choiceC == "paper") 
  ){
    return "Player";
  } else {
    return "Computer";
  }
  }


function logwins() {
  let playerwins = winners.filter((item) => item == "Player").length;
  let computerwins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player wins:", playerwins);
  console.log("Computer wins:", computerwins);
  console.log("Tie:", ties);
}  

function logRound(playerChoice, compChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "win the Round");
  console.log(".............................................");
}
  
   

          
      
 
 
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
