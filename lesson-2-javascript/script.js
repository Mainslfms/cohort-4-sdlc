let userName = "";

const setUsername = () => {
  const inputElement = document.getElementById("myInput");
  const inputValue = inputElement?.value;
  userName = !!inputValue ? inputValue : userName;
};

const myAlert = () => {
  setUsername(); // Ensure the string is updated before showing the alert
  alert(`Hello, I'm ${userName !== "" ? userName : "a stranger"}`);
};

let clickCount = 0;
let lastInputValue = "";

const duplicateText = () => {
  const inputElement = document.getElementById("duplicateInput");
  const inputValue = inputElement?.value;
  const outputElement = document.getElementById("displayText");

  if (inputValue !== lastInputValue) {
    lastInputValue = inputValue;
    clickCount = 0; // Reset click count if the input value changes
  }

  if (inputValue) {
    clickCount++;
    outputElement.innerText = inputValue.repeat(clickCount);
  } else {
    outputElement.innerText = "";
  }
};

// Create function called incrementCount that will add to a variable called count



