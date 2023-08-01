//This makes a random choice of rock, paper, or scissor.
const choices = ["Rock", "Paper", "Scissor"];
const computerReturn = null;
const randomChoice = choices[Math.floor(Math.random()*choices.length)];
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice(){
    return randomChoice;
}
function getPlayerChoice(){
    return prompt("what do you choose");
}


function singleRound(){
    console.log("Computer chose: " + computerSelection);
    console.log("Player chose: " + playerSelection);

    if (playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissor")
    {
    console.log("player wins");
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("player wins");
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("player wins");
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
    }
    else{
        console.log("computer wins");
    }
}


function game(){
singleRound();
}