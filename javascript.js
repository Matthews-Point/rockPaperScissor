let choices = ["Rock", "Paper", "Scissor"];
let trackComputerWins = 0;
let trackPlayerWins = 0;
let trackTies = 0;
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorButton = document.getElementById('scissor');
function rockRound(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = "rock"
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
function paperRound(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = "paper"
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
function scissorRound(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = "scissor"
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
function rockGame(){
    rockRound();
    console.log("Computer win tracks: " + trackComputerWins);
    console.log("Player win tracks: " + trackPlayerWins);
    console.log("Ties tracks: " + trackTies);
}
function paperGame(){
    paperRound();
    console.log("Computer win tracks: " + trackComputerWins);
    console.log("Player win tracks: " + trackPlayerWins);
    console.log("Ties tracks: " + trackTies);
}
function scissorGame(){
    scissorRound();
    console.log("Computer win tracks: " + trackComputerWins);
    console.log("Player win tracks: " + trackPlayerWins);
    console.log("Ties tracks: " + trackTies);
}


rockButton.addEventListener('click', rockGame);
paperButton.addEventListener('click', paperGame);
scissorButton.addEventListener('click', scissorGame);