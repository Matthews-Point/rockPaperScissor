let choices = ["Rock", "Paper", "Scissor"];
let trackComputerWins = 0;
let trackPlayerWins = 0;
let trackTies = 0;
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorButton = document.getElementById('scissor');

let playerScore = document.getElementById('playerScore')
let computerScore = document.getElementById('computerScore')
let tieScore = document.getElementById('tieScore')




function rockRound(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = "rock"
    console.log("Computer chose: " + computerSelection);
    console.log("Player chose: " + playerSelection);

    if (playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissor")
    {
    console.log("Player wins");
    playerScore.textContent++;
    
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
    //    return trackPlayerWins ++;
    playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
    //    return trackPlayerWins ++;
    playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
    //    return trackTies ++;
    tieScore.textContent++;
    }
    else{
        console.log("Computer wins");
    //    return trackComputerWins ++;
    computerScore.textContent++;
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
    playerScore.textContent++;
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
        playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
        playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
        tieScore.textContent++;
    }
    else{
        console.log("Computer wins");
        computerScore.textContent++;
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
    playerScore.textContent++;
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
        playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
        playerScore.textContent++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
        tieScore.textContent++;
    }
    else{
        console.log("Computer wins");
        computerScore.textContent++;
    }
}
function rockGame(){
    rockRound();
}
function paperGame(){
    paperRound();
}
function scissorGame(){
    scissorRound();
}


rockButton.addEventListener('click', rockGame);
paperButton.addEventListener('click', paperGame);
scissorButton.addEventListener('click', scissorGame);