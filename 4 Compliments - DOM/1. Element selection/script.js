//DOM Element selection

//getElement(Only the first referenced element) / getElements(All referenced elements)
const p1 = document.getElementById("Paragraph");
const p1p2 = document.getElementsByClassName("Paragraph");

//querySelector(Only the first referenced element)
const pTag = document.querySelector("p");
const pID = document.querySelector("#Paragraph");
const pClass = document.querySelector(".Paragraph");
const pCombinator = document.querySelector("div .Paragraph");

//querySelectorAll(All referenced elements)
const pTags = document.querySelectorAll("p");
const pIds = document.querySelectorAll("#Paragraph");
const pClasses = document.querySelectorAll(".Paragraph");
const pCombinators = document.querySelectorAll("div .Paragraph");

//Children elements
const div = document.querySelector("#div");
const divTitle = div.children[0];
const divP1 = div.children[1];
const divFirst = div.firstElementChild;
const divLast = div.lastElementChild;