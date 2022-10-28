// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
const family = {
    dad:"John",
    mom: "Mary",
    daugther:"Jane"
}

for (const item in family){
    console.log('key', item)
    console.log('value', family[item])
}