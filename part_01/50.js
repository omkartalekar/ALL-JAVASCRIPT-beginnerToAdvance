// block scope vs function scope 

// Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

// Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop

// let and const are block scope
// var is function scope 


// if(true){
//     var firstName="omkar"; 
//     console.log(firstName); // omkar
// }
// console.log(firstName); // omkar but let and const are not working outside scope of block


function myApp(){

    if(true){
        var firstName="omkar";
        console.log(firstName); // working
    }

    console.log(firstName);  // working


}
console.log(firstName); // not working - outside the function scope
myApp();