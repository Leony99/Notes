//Functions

//Function declaration
function doSomething(param1, param2) {
    return param1 + param2;
}

//Function expression
let doSomething2 = function (param1, param2) {
    return param1 + param2;
}

let doSomething3 = (param1, param2) => {
    return param1 + param2;
}

let doSomething4 = (param1, param2) => param1 + param2;

//OBS: Return is optional
function doSomething5() {
    console.log("Hello!");
}

//OBS: Arguments = Array of parameters
function doSomething6() {
    arguments[0]; //Parameter 1
    arguments[1]; //Parameter 2
    arguments[2]; //parameter 3
}

//OBS: Default parameter
function doSomething7(param1 = 5, param2 = 3) {
    console.log(param1 + param2);
}