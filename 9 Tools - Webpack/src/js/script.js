const body = document.querySelector("body");

const div = document.createElement("div");
const ul = document.createElement("ul");
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

//Função para obter um item aleatório do array
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//Adiciona 3 itens aleatórios na ul
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = getRandomItem(items);
  ul.appendChild(li);
}

//Adiciona a ul na div
div.appendChild(ul);

//Adiciona a div no body
body.appendChild(div);
