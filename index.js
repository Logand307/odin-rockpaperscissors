function computerPlay() {
  //initialize array of possible answers
  let answer = ["Rock", "Paper", "Scissors"];

  //convert string to numeric value with Math.floor and randomize value with Math.random, and traverse through entire array with answer.length
  let randomAnswer = answer[Math.floor(Math.random() * answer.length)];

  //output response to console for user
  console.log(randomAnswer);
}
computerPlay();
