console.warn("\nExercise 5 solution:");
function changeEnough(itemPrice, amountOfChange) {
  var cashSum = 0;
  cashSum += amountOfChange[0] * 0.25;
  cashSum += amountOfChange[1] * 0.1;
  cashSum += amountOfChange[2] * 0.05;
  cashSum += amountOfChange[3] * 0.01;
  if (cashSum >= itemPrice) {
    return true;
  }
  return false;
}
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

