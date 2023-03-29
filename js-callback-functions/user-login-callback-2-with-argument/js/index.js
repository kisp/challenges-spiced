console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(name) {
  console.log(`Welcome ${name}`);
}

handleUserLogin(showWelcomeMessage);
handleUserLogin((name) => {
  console.log(`Goodbye ${name}`);
});
