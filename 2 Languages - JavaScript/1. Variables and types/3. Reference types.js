//Reference types

//Objects
let car = {type:"Fiat", model:"500", color:"white"};
const car2 = {type:"Corvette", model:"Stingray", color:"Red"};
//You can change a property in variable and constant:
car.color = "Black";
car2.color = "White";
//You can add a property in variable and constant:
car.owner = "Leony";
car2.owner = "Leony";
//You can reassign only in variable:
car = {type:"Ferrari", model:"812", color:"red"};

//Arrays
let cars = ["Ferrari", "Corvette" , "Jaguar"];
const cars2 = ["Ferrari", "Corvette" , "Jaguar"];
//You can change an element in variable and constant:
cars[2] = "Porsche";
cars2[2] = "Porsche";
//You can add an element in variable and constant:
cars.push("Volvo");
cars2.push("Volvo");
//You can reassign only in variable:
cars = ["Porsche", "Audi" , "BMW"];

//Functions
let doSomething = function (param1, param2) {
    return param1 + param2;
}
const doSomething2 = function (param1, param2) {
    return param1 - param2;
}