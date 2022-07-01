// intro to arrays 
// reference type 
// how to create arrays

let fruits=["apple","mango","grapes"];
console.log(fruits); //[ 'apple', 'mango', 'grapes' ]
console.log(fruits[0]); //apple

// The Array.isArray() method determines whether the passed value is an Array.
console.log(Array.isArray(fruits)); //true

let numbers = [1,2,3,4];
console.log(numbers); // [ 1, 2, 3, 4 ]


let mixed = [1,2,2.3, "string", null, undefined];
console.log(mixed); // [ 1, 2, 2.3, 'string', null, undefined ]

let obj = {};
console.log(typeof(obj)); //object


console.log(Array.isArray(obj)); // false




