// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
console.warn("\nExercise 2 solution:");
let colors = ["white", "black", "yellow", "red", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log("My #%d choice is %s", i + 1, colors[i]);
}
let suffixes = { 1: "st", 2: "nd", 3: "rd", 4: "th", 5: "th" };
for (let i = 1; i <= colors.length; i++) {
  console.log("My %d%s choice is %s", i, suffixes[i], colors[i]);
}