//This makes a random choice of rock, paper, or scissor.
const choices = ["Rock", "Paper", "Scissor"];
const random = Math.floor(Math.random()*choices.length);
console.log(random, choices[random]);
