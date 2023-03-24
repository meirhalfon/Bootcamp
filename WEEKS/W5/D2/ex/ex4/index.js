// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
let book1 = {
    title: "Harry Potter",
    author: "JK Rowling ",
    image:
    "https://th.bing.com/th/id/R.9a60cbc5785f4de4cacb4b964a53708d?rik=4UWzTbuj2g73kA&pid=ImgRaw&r=0" , 
    alreadyRead: true,
  };
  let book2 = {
    title: "Eragon ",
    author: "Christopher Paolini",
    image:
   "https://th.bing.com/th/id/OIP.vvhK3JsGA-XCIzaLNvycnQHaL3?w=186&h=298&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    alreadyRead: false,
  };
  let allBooks = [book1, book2];
  let divListBooks = document.querySelector(".listBooks");
  allBooks.forEach((e) => {
    var div = document.createElement("div");
    div.textContent = `${e.title} written by ${e.author}`;
    if (e.alreadyRead) div.style.backgroundColor = "red";
    var image = document.createElement("div");
    image.style.backgroundImage = `url(${e.image})`;
    image.style.width = "100px";
    image.style.height = "150px";
    image.style.backgroundSize = "cover";
    div.appendChild(image);
    divListBooks.appendChild(div);
  });