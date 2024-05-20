//Objects initializers

//Literal object notation
const car = {
    brand: "BMW",
    model: "X6",
    year: 2020,
    price: 720000,
    owner: {
        name: "Leony",
        age: 23,
        code: 19232132908
    }
}
const car2 = {};
const car3 = new Object;

//Factory functions
function createProduct(name, price, discount = 10) {
    return {
        name: name,
        price: price,
        discountPrice: price - price * (discount/100)
    }
}

const p1 = createProduct("boné", 150);

//Constructor functions
function person(name) {
    this.name = name;

    this.talk = function() {
        console.log(`Meu nome é ${this.name}`);
    }
}

const p2 = new person("Leo");

//Class
class person {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`Meu nome é ${this.name}`);
    }
}

const p3 = new person("Leo");