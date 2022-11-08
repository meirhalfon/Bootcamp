let stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1,
  };
  let prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10,
  };
  let shoppingList = ["banana", "orange", "apple"];
  function myBill() {
    var totalSum = 0;
    shoppingList.forEach((element) => {
      if (element in stock) {
        totalSum += prices[element];
        stock[element] -= 1;
      }
    });
    return totalSum;
  }
  console.log(`Total sum of shoppingList is ${myBill()}`);
  console.log(`The new stock array is ${JSON.stringify(stock)}`);