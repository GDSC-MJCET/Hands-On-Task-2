const calciNumbers = document.querySelectorAll(".calciNumber");
const operators = document.querySelectorAll(".operator");
const clearEntry = document.querySelector(".delete");
const equals = document.querySelector(".equals");
const display = document.getElementById("display");
const backButton = document.getElementById("backButton");

let displayString = ""; // initially length = 0

clearEntry.addEventListener("click", (e) => {
  e.preventDefault();
  displayString = "";
  display.value = null;
});

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayString = displayString.slice(0, displayString.length - 1);
  display.value = displayString;
});

calciNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    displayString += e.target.dataset.val;
    display.value = displayString;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    e.preventDefault();
    if (displayString.length) {
      displayString += e.target.dataset.val;
      display.value = displayString;
    }
  });
});

equals.addEventListener("click", (e) => {
  e.preventDefault();
  if (displayString.length) {
    evalString = displayString.replace(/x/g, "*");
    display.value = eval(evalString);
    displayString = "";
  }
});
