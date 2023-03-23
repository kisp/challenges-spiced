console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const a = parseInt(form.elements.numberA.value);
  const b = parseInt(form.elements.numberB.value);

  let operation;

  switch (form.elements.operator.value) {
    case "addition":
      operation = add;
      break;
    case "subtraction":
      operation = subtract;
      break;
    case "multiplication":
      operation = multiply;
      break;
    case "division":
      operation = divide;
      break;
  }

  result = operation(a, b);
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
