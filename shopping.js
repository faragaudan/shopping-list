var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//Select all the initial lis
var lis = document.querySelectorAll("li");
//Create a variable for future delete buttons
var deleteButton;

//Return Length of input
function inputLength() {
  return input.value.length;
}

//Create delete buttons and append it to their parents(li)
function createDeleteButton(parent) {
  //Create element button
  var button = document.createElement("button");
  // Create and append text inside button
  button.appendChild(document.createTextNode("✖"));
  // Give class=delete to buttons - Its's going to be used to select them in the future
  button.className = "delete";
  // append or insert the button to the parent element(li)
  parent.appendChild(button);
}

//Toggle class=done when you invoke the function - use "this" to toggle only the one you selected
function toggleDoneClass() {
  this.classList.toggle("done");
}
