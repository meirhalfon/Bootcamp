// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
console.warn("\nExercise 3 solution:");
var num = 0;
while (num < 10) {
  num = Number(prompt("Input a number"));
  if (typeof num != "number" || num != num) {
    alert("Your input is incorrect");
  }
}