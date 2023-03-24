// 🌟 Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"];
console.warn("Exercise 1 Part I solution:");
let people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.splice(people.indexOf("Greg"), 1);
console.log(people);
// Write code to replace “James” to “Jason”.
people[people.indexOf("James")] = "Jason";
console.log(people);
// Write code to add your name to the end of the people array.
people.push("Jerry");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
people2 = people.slice(1, people.length - 1);
console.log(people2);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
console.warn("\nExercise 1 Part II ");
people.forEach((x) => console.log(x));
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Jason") {
    break;
  }
}