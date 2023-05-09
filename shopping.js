var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//Select all the initial lis
var lis = document.querySelectorAll("li");
//Create a variable for future delete buttons
var deleteButton;
let list = [];

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

//Create the "li" with everything it needs inside of it(text ,button, class)
function createListElement(value) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  // Create text for the li according to what you put in the input
  li.appendChild(span);
  span.appendChild(document.createTextNode(value));
  // Append or insert the new li to the ul
  ul.appendChild(li);

  createDeleteButton(li);
  //Updates the selector to the new number of buttons with class=delete
  deleteButton = document.querySelectorAll(".delete");

  //Applies the functionality to remove the li
  updateDeleteButtons();

  //add the click listener to toggle class=done
  li.addEventListener("click", toggleDoneClass);
}

function displayList() {
  list = JSON.parse(localStorage.getItem("list"));
  console.log(list);
  //createListElement();
  list.forEach((element) => createListElement(element));
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement(input.value);
    list.push(input.value);
    localStorage.setItem("list", JSON.stringify(list));
    input.value = "";
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement(input.value);
    list.push(input.value);
    localStorage.setItem("list", JSON.stringify(list));
    input.value = "";
  }
}

//Applies the functionality to remove the li to all the buttons (new and old)
function updateDeleteButtons() {
  for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function () {
      this.parentNode.remove();
      const newList = list.filter(
        (item) => item !== this.parentNode.innerText.replace("✖", "")
      );
      localStorage.setItem("list", JSON.stringify(newList));
      console.log(newList);
    });
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//INIT
//Add the event listener and create the delete buttons to the initial lis
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", toggleDoneClass);
  createDeleteButton(lis[i]);
}
//Selector of initial buttons with class = delete
deleteButton = document.querySelectorAll(".delete");
//It gives the buttons with class the function to remove the li(todo)
updateDeleteButtons();

//localStorage.setItem("list", JSON.stringify(["capsune"]))

displayList();

//how save array list in local storage
