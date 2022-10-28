// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

 const color = ["blue", "yellow","red","green","purple" ]
 const suffixes=["st", "nd", "rd", "th", "th"]

 for (let i =0 ; i < color.length; i++){
    console.log('My ${i+1}${suffixes[i]} choice is ${color[i]}')
 }