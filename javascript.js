let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let i = Math.floor(Math.random()*10);
   for (;i===0;) {
   i = Math.floor(Math.random()*10);
   }
   if (i===1 || i===2 || i===3){
    return "rock";
   }
   else if (i===4 || i===5 || i===6) {
   return "paper";
   }
   else {
    return "scissors";
   }
}

    
function getPlayerChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");
    answer = answer.toLowerCase();
    for(;answer !=="rock" && answer !=="paper" && answer !== "scissors";) {
        answer = prompt("Invalid choice. Please choose rock, paper, or scissors.");
        answer = answer.toLowerCase();
    };
    return answer;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock beats scissors. You win!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Paper beats rock. You lose :(";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Paper beats rock. You win!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Scissors beats paper. You lose :(";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors beats paper. You win!";
    }
    else {
        computerScore++;
        return "Rock beats scissors. You lose :(";
    }
}

const rockButton = document.querySelector("#rButton");
rockButton.addEventListener("click", playRound(rock, computerSelection));

const paperButton = document.querySelector("#pButton");
paperButton.addEventListener("click", playRound(paper, computerSelection));

const scissorsButton = document.querySelector("#sButton");
scissorsButton.addEventListener("click", playRound(scissors, computerSelection));

const resultsContainer = document.querySelector("#results");

function game() {
    for(let roundNumber =1; roundNumber < 6; roundNumber++) {
        //console.log("Round: " + roundNumber);
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        //console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore>computerScore) {
        //console.log("You win! Total rounds won: " + playerScore + "/5 rounds!");
    }
    else if(playerScore<computerScore) {
        //console.log("You lose... Total rounds won: " + playerScore + "/5 rounds.");
    }
    else if(playerScore===computerScore) {
        //console.log("Wow, you tied! What are the odds? Total rounds won: " + playerScore + "/5 rounds.");
    }
}

game(); 