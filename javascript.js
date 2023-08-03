//This makes a random choice of rock, paper, or scissor.
let choices = ["Rock", "Paper", "Scissor"];
let computerReturn = null;
//let randomChoice = choices[Math.floor(Math.random()*choices.length)];
//let computerSelection = getComputerChoice();
//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerSelection();
//let playerSelection = getPlayerSelection();
let trackComputerWins = 0;
let trackPlayerWins = 0;
let trackTies = 0;
let tracker = ""

//I need to find a way to get the player choice and computer choice
//per round instead f declaring it at the beginning of the code
/*
function testing(){
    let test = "1st variable";
    console.log(test);
}
testing();
*/

/*
function getComputerSelection(){
//    return randomChoice
 
}
function getPlayerSelection(){
return prompt("What do you choose");
}
*/

/*
function getComputerChoice(){
    return randomChoice;
}
function getPlayerChoice(){
    return prompt("what do you choose");
}
*/

function singleRound(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = prompt("What do you choose");
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
game();
game();
game();
game();

//getComputerSelection();
//getPlayerSelection();
//game();