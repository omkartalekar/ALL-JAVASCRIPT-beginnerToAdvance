// Hoisting


// function Hoisting

// Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. They are also always anonymous—there is no way to name an arrow function.

hello();

function hello(){
    console.log("hello world");
}

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

a=5;
console.log(a);

var a;






