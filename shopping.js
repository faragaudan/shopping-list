var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//Select all the initial lis
var lis = document.querySelectorAll("li");
//Create a variable for future delete buttons
var deleteButton;
let list = JSON.parse(localStorage.getItem("list")) || [];

function inputLength() {
  return input.value.length;
}

function createDeleteButton(parent) {
  var button = document.createElement("button");

  button.appendChild(document.createTextNode("✖"));

  button.className = "delete";

  parent.appendChild(button);
}

//Toggle class=done when you invoke the function - use "this" to toggle only the one you selected
function toggleDoneClass() {
  this.classList.toggle("done");
}

//Create the "li" with everything it needs inside of it(text ,button, class)
function createListElement(value) {
  return `<li>
    <span>${value}</span>
    <button data-name=${value} class="delete">✖</button>
  </li>`;
}

function displayList() {
  console.log(list);
  //createListElement();
  const htmlList = list.map(createListElement);
  let initialList = document.querySelector("ul");
  initialList.innerHTML = htmlList.join("");
  deleteButton = document.querySelectorAll(".delete");

  updateDeleteButtons();

  // //add the click listener to toggle class=done
  //li.addEventListener("click", toggleDoneClass);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    let initialList = document.querySelector("ul");
    initialList.innerHTML =
      initialList.innerHTML + createListElement(input.value);
    deleteButton = document.querySelectorAll(".delete");
    updateDeleteButtons();

    list.push(input.value);
    saveList(list);

    input.value = "";
  }
}

function saveList(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    let initialList = document.querySelector("ul");
    initialList.innerHTML =
      initialList.innerHTML + createListElement(input.value);
    deleteButton = document.querySelectorAll(".delete");
    updateDeleteButtons();

    createListElement(input.value);
    list.push(input.value);
    saveList(list);
    input.value = "";
  }
}

//Applies the functionality to remove the li to all the buttons (new and old)
function updateDeleteButtons() {
  for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function (e) {
      this.parentNode.remove();
      list = list.filter((item) => item !== e.target.getAttribute("data-name"));
      saveList(list);
    });
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", toggleDoneClass);
  createDeleteButton(lis[i]);
}

deleteButton = document.querySelectorAll(".delete");

updateDeleteButtons();

displayList();
