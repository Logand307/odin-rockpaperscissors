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
  let result = compare(playerSelection, computerSelection);
  if (result === 0) {
    return `It's a Tie! You both played ${playerSelection}`;
  } else if (result === 1) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = playerChoice();
const computerSelection = computerPlay();

//loop through 5 total rounds of play

function game() {
  let player = playerChoice();
  for (i = 0; i < 5; i++) {
    if (player !== "rock" && player !== "paper" && player !== "scissors") {
      console.log("Invalid choice, enter Rock, Paper, or Scissors only!");
      i--;
    } else {
      let result = playRound(playerChoice(), computerPlay());
      console.log(result);
      alert(result);
    }
  }
}

game();
