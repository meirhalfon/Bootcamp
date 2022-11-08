// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

console.warn("\nExercise 7 my solution :);
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let answer = [];
names.forEach((x, i) => answer.push(x[0]));
answer.sort();
console.log(answer.join(""));