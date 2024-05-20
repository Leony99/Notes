//Conditional structures

let gender = "Male", age = 17;

//if statement
if (gender == "Male" && age >= 18) {
    console.log("Adult male");
}
else if (gender == "Female" && age >=18) {
    console.log("Adult female");
}
else if (gender == "Male" && age < 18) {
    console.log("Nom adult male");
}
else if (gender == "Female" && age < 18) {
    console.log("Nom adult female");
}
else {
    console.log("Error");
}

//Ternary operator - Enhanced if
//expression ? IfExpressionTrueDo : IfExpressionFalseDo
let adultOrNot = age >= 18 ? "Adult" : "Nom adult";
console.log(adultOrNot)

//Switch statement
//Used only with a single value(gender)
switch (gender) {
    case "Male":
        console.log("Male");
        break;
    case "Female":
        console.log("Female");
        break;
    default:
        console.log("Error");
}