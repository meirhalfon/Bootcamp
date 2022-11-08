// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

console.warn("\nExercise 6 my solution:");
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let ans = [];
for (var key in details) {
  ans.push(key + " " + details[key]);
}
console.log(...ans);
