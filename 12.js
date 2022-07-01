// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 8;
let num2 = "7";

console.log(num1> num2); //true
// It compares like both are numbers

// == vs === 
num1 = 7;
num2 = "7";

console.log(num1==num2); //true
// == is used for comparison between two variables irrespective of the datatype of variable


console.log(num1 === num2); //false
// === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

// != vs !==

console.log(num1 !== num2); //true