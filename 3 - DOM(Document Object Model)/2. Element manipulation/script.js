//DOM Element manipulation

const div = document.querySelector("#div");

//Alter
div.children[0].textContent = "Title";
div.children[1].innerHTML = "Paragraph<br/>Paragraph"

//Style
div.style.background = "black";
div.children[1].style.color = "grey";

//Remove
div.lastElementChild.remove();