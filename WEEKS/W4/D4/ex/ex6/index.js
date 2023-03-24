function hotelCost() {
    var nightsHotel = prompt(
      "Input the number of nights would you like to stay in the hotel"
    );
    while (Number(nightsHotel) != Number(nightsHotel) || nightsHotel === "") {
      nightsHotel = prompt(
        "Error! Input the number of nights would you like to stay in the hotel"
      );
    }
    return Number(nightsHotel) * 140;
  }
  function planeRideCost() {
    var cityDestination = String(
      prompt("Input the City of destination")
    ).toLowerCase();
    while (
      cityDestination === "" ||
      Number(cityDestination) == Number(cityDestination)
    ) {
      cityDestination = String(
        prompt("Error! Input the City of destination")
      ).toLowerCase();
    }
    switch (cityDestination) {
      case "london":
        return 183;
      case "paris":
        return 220;
      default:
        return 300;
    }
  }
  function rentalCarCost() {
    var daysCar = prompt("Input the number of days would you like to rent a car");
    while (Number(daysCar) != Number(daysCar) || daysCar === "") {
      daysCar = prompt(
        "Error! Input the number of days would you like to rent a car"
      );
    }
    daysCar = Number(daysCar);
    if (daysCar > 10) {
      return daysCar * 40 * 0.95;
    }
    return daysCar * 40;
  }
  function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
  }
  console.log(`The total vacation cost is ${totalVacationCost()}$`);
  
  console.warn("\nExercise 6 solution 2:");
  function customPrompt(message, typeValueNeeded = ("num", "str")) {
    var input = prompt(message);
    if (typeValueNeeded === "num") {
      while (Number(input) != Number(input) || input === "") {
        input = prompt(`\u274C Error! ${message}`);
      }
      return Number(input);
    }
    while (input === "" || Number(input) == Number(input)) {
      input = prompt(`\u274C Error! ${message}`);
    }
    return input;
  }
  function hotelCost() {
    nights = customPrompt(
      "Input the number of nights would you like to stay in the hotel",
      "num"
    );
    return nights * 140;
  }
  function planeRideCost() {
    cityDestination = customPrompt("Input the City of destination", "str");
    switch (cityDestination) {
      case "london":
        return 183;
      case "paris":
        return 220;
      default:
        return 300;
    }
  }
  function rentalCarCost() {
    daysCar = customPrompt(
      "Input the number of days would you like to rent a car",
      "num"
    );
    if (daysCar > 10) {
      return daysCar * 40 * 0.95;
    }
    return daysCar * 40;
  }
  function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
  }
  console.log(`The total vacation cost is ${totalVacationCost()}$`);