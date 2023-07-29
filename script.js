const submit = document.querySelector("#submit");
const start = document.querySelector("#start");
let input = document.getElementById("input-num");
let guess = document.querySelector("#guesses");
let result = document.querySelector("#results");

function checkGuess() {
  let inputVal = parseInt(input.value);
  let answer = 31;
  if (inputVal === answer) {
    guess.innerHTML++;
    result.innerHTML = `<span style="color:#046A56">Congratulations, you guessed the correct number!</span>`;
  } else if (inputVal < answer && inputVal > 0) {
    guess.innerHTML++;
    result.innerHTML = `Too low! Try again!`;
  } else if (inputVal > answer && inputVal <= 50) {
    guess.innerHTML++;
    result.innerHTML = `Too high! Try again!`;
  } else {
    result.innerHTML = `<span style="color: #FF0000">Enter a number between 0 to 50</span>`;
  }
}

submit.addEventListener("click", checkGuess);
start.addEventListener("click", () => {
  location.reload(true);
});
