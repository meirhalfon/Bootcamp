
  
  function winBattle() {
    return true;
  }
  // Transform the winBattle() function to an arrow function.
  // Create a variable called experiencePoints.
  // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
  // Console.log the experiencePoints variable.
  // ------------- COMMENT start --------------------------------- //
  experiencePoints = () => (winBattle() ? 10 : 1);
  console.log(experiencePoints());
  // ------------- COMMENT end ----------------------------------- //
  

 