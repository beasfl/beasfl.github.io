const displayList = [
  "π μ€μ",
  "π₯ μ°λ­",
  "π νΌμ",
  "π λ²κ±°",
  "π² νμ",
  "π£ μΌμ",
];

display = document.querySelector("#display");

const displayText = displayList[Math.floor(Math.random() * displayList.length)];

display.innerText = `Today Lunch : ${displayText}`;
