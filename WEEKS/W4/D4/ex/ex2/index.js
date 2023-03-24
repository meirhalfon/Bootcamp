Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.
console.warn("\nExercise 2 :");
function calculateTip() {
  var billAmount = Number(prompt("Input amount of the bill"));
  var tip;
  switch (true) {
    case billAmount < 50:
      tip = 20;
      break;
    case billAmount < 200:
      tip = 15;
      break;
    default:
      tip = 10;
      break;
  }
  console.log(
    `Amount of tip is ${tip}%, final bill is ${
      billAmount + (billAmount * tip) / 100
    }$`
  );
}
calculateTip();