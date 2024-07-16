String gender = "MALE";
int age = 22;

//if statement
if (gender.equals("MALE") && age >= 18) {
    System.out.println("Adult male");
}
else if (gender.equals("FEMALE") && age >=18) {
    System.out.println("Adult female");
}
else if (gender.equals("MALE") && age < 18) {
    System.out.println("Nom adult male");
}
else if (gender.equals("FEMALE") && age < 18) {
    System.out.println("Nom adult female");
}
else {
    System.out.println("Error");
}

//Ternary operator - Enhanced if
//(expression)? IfExpressionTrueDo : IfExpressionFalseDo
String adultOrNot = (age >= 18)? "Adult" : "Nom adult";

//Switch statement
//Used only with a single value(gender)
switch (gender) {
    case "MALE" :
        System.out.println("Male");
        break;
    case "FEMALE" :
        System.out.println("Female");
        break;
    default :
        System.out.println("Error");
}