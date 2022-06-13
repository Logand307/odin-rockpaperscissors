//generate automated input

function computerChoice() {
  //array of possible answers

  let answer = [`Rock`, `Paper`, `Scissors`];

  //returning random number between 0 and 2

  const randomAnswer =
    answer[Math.floor(Math.random() * answer.length)].toLowerCase();
  return randomAnswer;
}

//collect user input

function playerChoice() {
  const playerPrompt = prompt("Rock, Paper, or Scissors?").toLowerCase();

  //validate input
  if (
    playerPrompt !== "rock" &&
    playerPrompt !== "paper" &&
    playerPrompt !== "scissors"
  ) {
    alert("Invalid choice, enter Rock, Paper, or Scissors only!");
    playerChoice();
  }
  return playerPrompt;
}

//set conditions

function compareChoices(a, b) {
  if (a === "rock") {
    if (b === "scissors") return 1;
    else if (b === "paper") return -1;
    else return 0;
  } else if (a === "paper") {
    if (b === "scissors") return -1;
    else if (b === "rock") return 1;
    else return 0;
  } else if (a === "scissors") {
    if (b === "rock") return -1;
    else if (b === "paper") return 1;
    else return 0;
  }
}

//initiate round

function playRound(player, computer) {
  let roundResult = compareChoices(player, computer);
  if (roundResult === 0) {
    return `It's a Tie! You both played ${player}`;
  } else if (roundResult === 1) {
    return `You Win! ${player} beats ${computer}`;
  } else if (roundResult === -1) {
    return `You lose! ${computer} beats ${player}`;
  }
}

//loop through 5 total rounds of play

function game() {
  for (i = 0; i < 5; i++) {
    let gameResult = playRound(playerChoice(), computerChoice());
    alert(gameResult);
    console.log(gameResult);
  }
}

game();
