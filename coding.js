let numberGuess = Math.round(Math.random() * 19) + 1;
console.log(numberGuess);
let sum = 20;
const high = 00;
const number = document.getElementById("number");
let score = document.getElementById("score");
const highScore = document.getElementById("highScore");
const message = document.getElementById("measure");
const magicNumber = document.querySelector(".nolabel");
let newHigh = highScore.innerHTML;

document.getElementById("btnRest").addEventListener("click", function () {
  sum = 20;
  //Clear the Input box
  number.value = "";
  //Reset Score to 20
  score.innerHTML = sum;
  //Reset the message
  message.innerHTML = "Let's Begin";
  //Reset the label
  magicNumber.innerHTML = "?";
  //Reset the background color
  document.querySelector("body").style.backgroundColor = "#222";
  //Reset the Game if the HighScore is 20
  if (highScore.innerHTML == "20") {
    highScore.innerHTML = high;
  }
  //Create a new random number
  numberGuess = Math.round(Math.random() * 19) + 1;
  console.log("New no" + numberGuess);
});

document.getElementById("btnCheck").addEventListener("click", function () {
  //If number input is within the range
  if (number.value >= 1 && number.value <= 20) {
    //If the number is too high
    if (number.value > numberGuess && sum > 1) {
      message.innerHTML = "📈 Too High!";
      //Reduce the score by one
      sum--;
      score.innerHTML = sum;
      //If the number is too low
    } else if (number.value < numberGuess && sum > 1) {
      message.innerHTML = "📉 Too Low!";
      //Reduce the score by one
      sum--;
      score.innerHTML = sum;
      //When they get the correct number
    } else if (number.value == numberGuess && sum > 1) {
      message.innerHTML = "🥇 You Won!";
      //Show the MagicNumber
      magicNumber.innerHTML = numberGuess;
      //Change the background color
      document.querySelector("body").style.backgroundColor = "#60b347";
      //Show the highScore
      if (score.innerHTML > highScore.innerHTML) {
        highScore.innerHTML = score.innerHTML;
      }
      if (highScore.innerHTML == 20) {
        message.innerHTML = "😈You beat the System!";
        document.querySelector("body").style.backgroundColor = "#d50000";
      }
    } else {
      message.innerHTML = "☠ GAME OVER!";
      score.innerHTML = 0;
    }
  } else {
    message.innerHTML = "Number should be between 1 and 20";
    //Reduce the score by one
    sum--;
    score.innerHTML = sum;
  }
});
