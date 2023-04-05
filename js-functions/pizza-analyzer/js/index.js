console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = 24;
let diameter2 = 24;

pizzaInput1.addEventListener("input", (e) => {
  diameter1 = parseInt(e.target.value);
  refreshDisplay();
});

pizzaInput2.addEventListener("input", (e) => {
  diameter2 = parseInt(e.target.value);
  refreshDisplay();
});

// Task 1

function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = circleArea(diameter1 / 2);
  const area2 = circleArea(diameter2 / 2);
  const percentage = ((area2 - area1) / area1) * 100;
  const roundedPercentage = Math.round(percentage);
  output.textContent = roundedPercentage;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = `${(newSize / 24) * 100}px`;
}

// Task 3

function updateOutputColor(size1, size2) {
  const backgroundColor = size1 <= size2 ? "var(--green)" : "var(--red)";
  outputSection.style.backgroundColor = backgroundColor;
}

function refreshDisplay() {
  calculatePizzaGain(diameter1, diameter2);
  updateOutputColor(diameter1, diameter2);
}

// Run this once on page load
refreshDisplay();
