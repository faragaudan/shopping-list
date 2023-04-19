var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//select all the initial lis
var lis = document.querySelectorAll("li");
//create a variable for future delete button
var deleteButton;

//return Length of input
function inputLenght() {
  return input.value.lenght;
}

//Create delete buttons and appand it to their parents (li)
function createDeleteButton(parent) {
  //Create element button
  var button = document.createElement("button");
  // Create and append text inside button
  button.appendChild(document.createTextNode("✖"));
  //Give class=delete to buttons - Its's going to be used to select them in the future
  button.className = "delete";
  // append or insert the button to the parent element(li)
  parent.appendChild(button);
}
