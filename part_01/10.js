// template string 

// Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.

let age=22;
let firstName="omkar";

// "my name is omkar and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let tstring=`my name is ${firstName} and my age is ${age}`;
console.log(tstring);