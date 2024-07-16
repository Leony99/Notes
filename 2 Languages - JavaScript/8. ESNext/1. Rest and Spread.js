//Rest and Spread

//Rest - Transform several individual elements into an array
//You can only use it in the last parameter in a function
function toArray(...numbers) {
  return numbers;
}
console.log(toArray(3, 4, 5, 6));

//Spread - Transform a data set(array, object) into individual elements
//Arrays
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [0, ...numbers, 6];
console.log(moreNumbers);

//Arrays(Character)
const string = "Hello world";
const letters = [...string];
console.log(letters);

//Objects
const dog = {name: "Rex", race: "Bulldog"};
const moreDog = {...dog, color: "white"};
console.log(moreDog);