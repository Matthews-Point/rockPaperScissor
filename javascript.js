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
let p = 0;
let pPassed = false;
let c = 0;
let cPassed = false;


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
    p++;
    
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
    //    return trackPlayerWins ++;
    playerScore.textContent++;
    p++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
    //    return trackPlayerWins ++;
    playerScore.textContent++;
    p++;
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
    c++;
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
    p++; 
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
        playerScore.textContent++;
        p++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
        playerScore.textContent++;
        p++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
        tieScore.textContent++;
    }
    else{
        console.log("Computer wins");
        computerScore.textContent++;
        c++;
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
    p++;
    }

    else if(playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock")
    {
        console.log("Player wins");
        playerScore.textContent++;
        p++;
    }
    else if(playerSelection.toLowerCase() == "scissor" &&
    computerSelection.toLowerCase() == "paper")
    {
        console.log("Player wins");
        playerScore.textContent++;
        p++;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        console.log("It's a tie");
        tieScore.textContent++;
    }
    else{
        console.log("Computer wins");
        computerScore.textContent++;
        c++;
    }
}


function rockGame(){
    if (!(p === 5 || c === 5)){
        rockRound();
    }
    else if (p === 5){
        alert("P won");
    }
    else{
        alert("c won");
    }


    
}
function paperGame(){
    if (!(p === 5 || c === 5)){
        paperRound();
    }
    else if (p === 5){
        alert("P won");
    }
    else{
        alert("c won");
    }
}

function scissorGame(){
    if (!(p === 5 || c === 5)){
        scissorRound();
    }
    else if (p === 5){
        alert("P won");
    }
    else{
        alert("c won");
    }
}



rockButton.addEventListener('click', rockGame);
paperButton.addEventListener('click', paperGame);
scissorButton.addEventListener('click', scissorGame);