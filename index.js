function computerPlay() {
  //initialize array of possible answers
  let answer = [`Rock`, `Paper`, `Scissors`];

  //returning random number between 0 and 2
  const randomAnswer =
    answer[Math.floor(Math.random() * answer.length)].toLowerCase();
  return randomAnswer;
}

//collect user input

function playerChoice() {
  const ask = prompt("Rock, Paper, or Scissors?").toLowerCase();
  return ask;
}

//set conditions

function compare(a, b) {
  if (a === "rock") {
    if (b === "scissors") return 1;
    else if (b === "paper") return -1;
    else return 0;
  } else if (a === "paper") {
    if (b === "scissors") return -1;
    else if (b === "rock") return 1;
    else return 0;
  } else {
    if (b === "paper") return 1;
    else if (b === "rock") return -1;
    else return 0;
  }
}

//initiate round

function playRound(playerSelection, computerSelection) {
  // your code here!
  let result = compare(playerSelection, computerSelection);
  if (result === 0) {
    return "It is a Tie!";
  } else if (result === 1) {
    return "You Win!";
  } else return "You Lose!";
}

const playerSelection = playerChoice();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

playRound();
