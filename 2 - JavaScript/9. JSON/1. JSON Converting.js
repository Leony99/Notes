const people = [
    {id: 1, name: "Joseph"},
    {id: 2, name: "Jon"},
    {id: 3, name: "Marie"}
];

//Converting to JSON
const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

//Converting to list
const peopleList = JSON.parse(peopleJSON);
console.log(peopleList);