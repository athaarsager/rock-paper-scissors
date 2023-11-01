let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

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

    
/*function getPlayerChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");
    answer = answer.toLowerCase();
    for(;answer !=="rock" && answer !=="paper" && answer !== "scissors";) {
        answer = prompt("Invalid choice. Please choose rock, paper, or scissors.");
        answer = answer.toLowerCase();
    };
    return answer;
} */

const rockButton = document.querySelector("#rButton");
rockButton.addEventListener("click", () => 
{playRound("rock", computerSelection)});

const paperButton = document.querySelector("#pButton");
paperButton.addEventListener("click", () => 
{playRound("paper", computerSelection)});

const scissorsButton = document.querySelector("#sButton");
scissorsButton.addEventListener("click", () => 
{playRound("scissors", computerSelection)});

const resultsContainer = document.querySelector("#results");

let roundDisplay = document.createElement("p");
roundDisplay.textContent = `Round: ${roundNumber}`;
resultsContainer.appendChild(roundDisplay);

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        roundNumber++;
        alert("It's a tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundNumber++;
        playerScore++;
        alert("Rock beats scissors. You win!");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundNumber++;
        computerScore++;
        alert("Paper beats rock. You lose :(");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundNumber++
        playerScore++;
        alert("Paper beats rock. You win!");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        roundNumber++;
        computerScore++;
        alert("Scissors beats paper. You lose :(");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundNumber++;
        alert("Scissors beats paper. You win!");
    }
    else {
        roundNumber++;
        computerScore++;
        alert("Rock beats scissors. You lose :(");
    }
}

/* function roundResult(playRound) {
        let resultDisplay = document.createElement("p");
        resultDisplay.textContent = `${playRound(playerSelection, computerSelection)}`;
        resultsContainer.appendChild(resultDisplay);
        
        //console.log(playRound(playerSelection, computerSelection));
    
    if(playerScore>computerScore) {
        let winMessage = document.createElement("p");
        winMessage.textContent = `You Win! Total rounds won: ${playerScore}/5 rounds!`;
        resultsContainer.appendChild(winMessage);
        //console.log("You win! Total rounds won: " + playerScore + "/5 rounds!");
    }
    else if(playerScore<computerScore) {
        let loseMessage = document.createElement("p");
        loseMessage.textContent = `You lose...Total rounds won: ${playerScore}/5 rounds.`;
        resultsContainer.appendChild(loseMessage);
        //console.log("You lose... Total rounds won: " + playerScore + "/5 rounds.");
    }
    else if(playerScore===computerScore) {
        let tieMessage = document.createElement("p");
        tieMessage.textContent = `Wow, you tied! What are the odds? Total rounds won: ${playerScore}/5 rounds.`;
        resultsContainer.appendChild(tieMessage);
        //console.log("Wow, you tied! What are the odds? Total rounds won: " + playerScore + "/5 rounds.");
    }
} */

