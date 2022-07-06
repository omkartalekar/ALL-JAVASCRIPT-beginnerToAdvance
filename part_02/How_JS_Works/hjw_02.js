// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

myFunction(); // this is my function

firstName="Harshit";

function myFunction(){
    console.log("this is my function");
}

var firstName;
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName); // Harshit Sharma