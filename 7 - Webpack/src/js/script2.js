const ul = document.querySelector("ul");
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//Adiciona 2 itens aleatórios na ul
for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = getRandomItem(items);
    ul.appendChild(li);
}