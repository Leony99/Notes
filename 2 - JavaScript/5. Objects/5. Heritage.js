//Heritage
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barked!`)
    }
}

let a = new Animal("Rex");
a.speak();
let b = new Dog("Ronnie");
b.speak();

//Prototype
Object.prototype.attr0 = "0Pro";
const avo = {attr1: "1A"};
const pai = {attr2: "2P", __proto__: avo};
const filho = {attr2: "2F", attr3: "3F", __proto__: pai};

console.log(filho.attr3, filho.attr2, filho.attr1, filho.attr0);

//Important functions
//Create a new object with __proto__ = parameter
const neto = Object.create(filho);
//Checks if the attribute is own or comes from a prototype
neto.hasOwnProperty('attr2');