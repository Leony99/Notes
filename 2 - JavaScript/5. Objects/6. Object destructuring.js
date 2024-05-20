//Object destructuring

const person = {
    name: "Ana",
    age: 25,
    address: {
        city: "Rio de Janeiro - RJ",
        district: "Taquara",
        street: "Estrada do cafunda, 3211",
        house: 1
    }
}

//Extract name and age from object person
let {name, age} = person;
console.log(name, age);

let {name: n, age:a} = person;
console.log(n, a);

//Extract an attribute of an attribute
let {address: {city, district}} = person; 
console.log(city, district);

//Extract an undefined attribute
let {lastName} = person;
console.log(lastName);

//Extract and set a value to an undefined attribute
let {cpf = "111.111.111-11"} = person;
console.log(cpf);