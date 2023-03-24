//  Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

console.warn("\nExercise 5 my solution:");
let family = {
  father: "Rami",
  mother: "Rakel",
  son: "Richard",
  daughter: "Rima",
};
console.warn("keys:");
for (var key in family) {
  console.log(key);
}
console.warn("values:");
for (var key in family) {
  console.log(family[key]);
}