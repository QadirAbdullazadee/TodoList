let form = document.querySelector(".form");
let addInput = document.querySelector(".input");
let button = document.querySelector(".button");
let ul = document.querySelector(".ul");

form.addEventListener("submit", runFuction);

function runFuction(e) {
  e.preventDefault();
  let input = addInput.value.trim();
  if (input == "" || input == null) {
    alert("Please add text here");
  } else {
    createItems(input);
  }
}

function createItems(value) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = value;
  addInput.value = "";
  li.className = "items";

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  li.appendChild(removeButton);
  removeButton.addEventListener("click",removeTodo)
}
const removeTodo = (e) => {
  if(e.target){
   let li =  e.target.parentElement;
   li.remove()
  }
};
