console.warn("Exercise 1 solution 1:");
var ans = "*";
for (var i = 0; i < 6; i++) {
  console.log(ans);
  ans += " *";
}
console.warn("\nExercise 1 solution 2:");
var ansArray = [];
for (var i = 1; i <= 6; i++) {
  ansArray.push("*".repeat(i));
}
ansArray.forEach((item) => console.log(item.split("").join(" ")));