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

const resultsContainer = document.querySelector("#results");

let resultDisplay = document.createElement("p");

let finalOutcome = document.createElement("h1");

let playerScoreDisplay = document.createElement("h3");
playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
resultsContainer.appendChild(playerScoreDisplay);

let computerScoreDisplay = document.createElement("h3");
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
resultsContainer.appendChild(computerScoreDisplay);

let roundDisplay = document.createElement("h3");
roundDisplay.textContent = `Round: `;
resultsContainer.appendChild(roundDisplay);

const rockButton = document.querySelector("#rButton");
rockButton.addEventListener("click", playRock);

const paperButton = document.querySelector("#pButton");
paperButton.addEventListener("click", playPaper);

const scissorsButton = document.querySelector("#sButton");
scissorsButton.addEventListener("click", playScissors);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", scoreTally);
});

function playRock() {
    playRound("rock", getComputerChoice());
}

function playPaper() {
    playRound("paper", getComputerChoice());
}

function playScissors() {
    playRound("scissors", getComputerChoice());
}

function scoreTally() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        roundDisplay.textContent = `Round: ${roundNumber}`;

        if(roundNumber === 5) {
            
            if(playerScore > computerScore) {
                finalOutcome.textContent = `You Win! Total rounds won: ${playerScore}/5 rounds!`;
                resultsContainer.appendChild(finalOutcome);
            }
            else if(playerScore < computerScore) {
                finalOutcome.textContent = `You lose...Total rounds won: ${playerScore}/5 rounds.`;
                resultsContainer.appendChild(finalOutcome);
            }
            else if(playerScore === computerScore) {
                finalOutcome.textContent = `Wow, you tied! What are the odds? Total rounds won: ${playerScore}/5 rounds.`;
                resultsContainer.appendChild(finalOutcome);
            }
            rockButton.removeEventListener("click", playRock);

            paperButton.removeEventListener("click", playPaper);

            scissorsButton.removeEventListener("click", playScissors);
            
            let replayText = document.createElement("h2");
            replayText.textContent = "Do you want to replay?";
            resultsContainer.appendChild(replayText);

            let yesButton = document.createElement("button");
            yesButton.textContent = "Yes";
            resultsContainer.appendChild(yesButton);
            yesButton.addEventListener("click", () => {
                location.reload();
            });
            
            buttons.forEach((button) => {
            button.removeEventListener("click", scoreTally)
            });
        }  
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        roundNumber++;
        resultDisplay.textContent = `It's a tie!`;
        resultsContainer.appendChild(resultDisplay);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundNumber++;
        playerScore++;
        resultDisplay.textContent = `Rock beats scissors. You win!`;
        resultsContainer.appendChild(resultDisplay); 
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundNumber++;
        computerScore++;
        resultDisplay.textContent = `Paper beats rock. You lose :(`;
        resultsContainer.appendChild(resultDisplay);
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundNumber++
        playerScore++;
        resultDisplay.textContent = `Paper beats rock. You win!`;
        resultsContainer.appendChild(resultDisplay);
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        roundNumber++;
        computerScore++;
        resultDisplay.textContent = `Scissors beats paper. You lose :(`;
        resultsContainer.appendChild(resultDisplay);
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundNumber++;
        playerScore++;
        resultDisplay.textContent = `Scissors beats paper. You win!`;
        resultsContainer.appendChild(resultDisplay);
    }
    else {
        roundNumber++;
        computerScore++;
        resultDisplay.textContent = `Rock beats scissors. You lose :(`;
        resultsContainer.appendChild(resultDisplay);
    
    }
    
}

