/* Main goal: Make a program that lets the user play rock paper scissors
against the computer.

Create a function called getComputerChoice that will randomly
return either rock, paper, or scissors. Declare the variable, 
then create function that uses Math.Random() *10 plus math.floor
to generate a number "i" between 0 and 9. If 0, re-generate, if 1-3, pick rock, if 3-5 pick paper,
if 6-9, pick scissors. return the output to getComputerChoice*/

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
};


/* Write a function that plays a single round of rock paper scissors.
The function should take two parameters-the playerSelection and 
computerSelection. 
Create variable playerSelection that prompts the user to enter rock, paper, or scissors.
set playerSelection to lowercase. Create for loop to display error message
if player does not enter rock, paper, or scissors.
Set computerSelection equal to the output of getComputerChoice.
Return a string that declares the winner by using an if else or swith for the
various win/lose possibilities.
"You lose! Paper beats Rock" etc.*/

let playerSelection = prompt("Rock, Paper, or Scissors?");
playerSelection = playerSelection.toLowerCase();
for(;playerSelection !=="rock" && playerSelection !=="paper" && playerSelection !== "scissors";) {
    prompt("Invalid choice. Please choose rock, paper, or scissors.");
};

computerSelection = getComputerChoice();



/*Write a new function called game(). Use the previous function
inside of this one to play a 5-round game that keeps a score and
reports a winner or loser at the end.
*/