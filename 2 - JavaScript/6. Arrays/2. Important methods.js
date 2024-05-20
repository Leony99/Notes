//Important methods

const cars = ["Ferrari", "Corvette" , "Jaguar"];

//push(value)
//Adds new items to the end of an array
cars.push("Volvo");

//forEach(function(currentValue, index, array), thisValue)
//Calls a function for each element in an array
cars.forEach(function(car, index){
    console.log(cars[index]);
});

//map(function(currentValue, index, array), thisValue)
//Return a new array from calling a function for every array element

//filter(function(currentValue, index, array), thisValue)
//Return a new array filled with elements that pass a test provided by a function

//reduce(function(total, currentValue, currentIndex, arr), initialValue)
//Returns a single value: the reducer function accumulated result

//concat(array2, array3, array4, ..., arrayX)
//Returns a new array, containing the joined arrays