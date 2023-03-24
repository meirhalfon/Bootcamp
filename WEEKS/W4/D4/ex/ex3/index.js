//Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313
// Bonus: Add a parameter divisor to the function.
// isDivisible(divisor)
// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
console.warn("\nExercise 3 solution 1:");
function isDivisible() {
  var numsDivisible = [];
  for (var i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      numsDivisible.push(i);
    }
  }
  console.log(
    `Numbers from 0 to 500 that are divisible by 23 is ${numsDivisible.join(
      " "
    )}`
  );
  console.log(
    `Sum of all numbers from 0 to 500 that are divisible by 23 is ${numsDivisible.reduce(
      (a, b) => a + b,
      0
    )}`
  );
}
isDivisible();
console.warn("\nExercise 3 solution 2:");
function isDivisibleByNum(num) {
  var numsDivisible = [];
  for (var i = 0; i <= 500; i++) {
    if (i % num === 0) {
      numsDivisible.push(i);
    }
  }
  console.log(
    `Numbers from 0 to 500 that are divisible by ${num} is ${numsDivisible.join(
      " "
    )}`
  );
  console.log(
    `Sum of all numbers from 0 to 500 that are divisible by ${num} is ${numsDivisible.reduce(
      (a, b) => a + b,
      0
    )}`
  );
}
isDivisibleByNum(3);
isDivisibleByNum(45);
