const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isArray(input) {
  return Array.isArray(input);
}

// Get user input
rl.question('Enter a value: ', (userInput) => {
  // Check if the input is an array
  const isInputArray = isArray(userInput);

  // Display the result
  console.log('User input is an array:', isInputArray);

  // Close the readline interface
  rl.close();
});