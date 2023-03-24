  
  // Using these arrays :
  
  const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  const ordinal = ["th", "st", "nd", "rd"];
  // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .”
  // “2nd choice is Green.” “3rd choice is Red.” ect…
  // Hint : Use the array methods taught in class and ternary operator.
  // ------------- COMMENT start --------------------------------- //
  colors.forEach((e, i) =>
    console.log(`${i + 1}${ordinal[i + 1 > 3 ? 0 : i + 1]} choice is ${e}`)
  );
  // ------------- COMMENT end ----------------------------------- //
  
  