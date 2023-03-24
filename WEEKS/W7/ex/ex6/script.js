// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that
// they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
// ------------- COMMENT start --------------------------------- //
let bankAmount = 10000;
const VAT = 0.17;
let details = [+200, -100, +146, +167, -2900];
let bankAccount = () => {
  details.forEach((e, i, details) => {
    bankAmount += details[i] < 0 ? details[i] * (VAT + 1) : details[i];
  });
  console.log(bankAmount);
};
bankAccount();
