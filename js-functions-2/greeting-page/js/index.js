console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let hour = new Date().getHours();
  // hour = 10;

  const messages = [
    [6, 12, "Good Morning"],
    [13, 18, "Good Afternoon"],
    [19, 22, "Good Evening"],
    [23, 5, "Good Night"],
  ];

  let greeting = "Dont know what to say...";

  for ([from, to, message] of messages) {
    if (isInRange(hour, from, to)) {
      greeting = message;
      break;
    }
  }

  return greeting;
}

function isInRange(x, from, to) {
  return from <= x && x <= to;
}

function getDayColor() {
  let weekday = new Date().getDay();
  // weekday = 7;

  let color;

  switch (weekday) {
    case 1:
      color = "darkgray";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      color = "lightblue";
      break;
    case 6:
    case 7:
      color = "hotpink";
      break;
  }

  return color;
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
