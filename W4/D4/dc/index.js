console.warn("Exercise solution:");
var arr = prompt("Input several words separated by commas").split(" ");
var maxLength = 0;
var solution = [];
arr.forEach((e) => {
  maxLength = Math.max(maxLength, e.length);
});
solution.push("*".repeat(maxLength + 4));
arr.forEach((e) => {
  solution.push("* " + e + " ".repeat(maxLength - e.length) + " *");
});
solution.push("*".repeat(maxLength + 4));
solution.forEach((e) => console.log(e));