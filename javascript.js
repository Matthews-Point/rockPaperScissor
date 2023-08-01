//This makes a random choice of rock, paper, or scissor.
let choices = ["Rock", "Paper", "Scissor"];
let computerReturn = null;
let randomChoice = choices[Math.floor(Math.random()*choices.length)];
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let trackComputerWins = 0;
let trackPlayerWins = 0;
let trackTies = 0;
let tracker = ""

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
    console.log("Player wins");
    return trackPlayerWins ++;
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
        return trackPlayerWins ++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
        return trackPlayerWins ++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
        return trackTies ++;
    }
    else{
        console.log("Computer wins");
        return trackComputerWins ++;
    }
}

function game(){
    singleRound();

    console.log("Computer win tracks: " + trackComputerWins);
    console.log("Player win tracks: " + trackPlayerWins);
    console.log("Ties tracks: " + trackTies);
}
game();