// A prototype is an existing inbuilt functionality in JavaScript. Whenever we create a JavaScript function, JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object.

function hello(){
    console.log("hello world");
}

hello.myOwnProperty="very unique value";
console.log(hello.myOwnProperty);

console.log(hello.prototype);

hello.prototype.abc="abc";
hello.prototype.xyz="xyz";
hello.prototype.sing=function(){
    return "lalalla";
}
console.log(hello.prototype.sing());
console.log(hello.prototype.abc);
console.log(hello.prototype.xyz);