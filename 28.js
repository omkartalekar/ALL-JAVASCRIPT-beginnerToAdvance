// primitve vs reference data types

let num1=6;
let num2=num1;
console.log(num1); //6
console.log(num2); //6

num1++;
console.log(num1); //7
console.log(num2); //6


// reference types

let array1=["item1","item2"];
let array2=array1;
console.log(array1);
// [ 'item1', 'item2']

console.log(array2);
// [ 'item1', 'item2']

array1.push("item3");
console.log(array1);
// [ 'item1', 'item2', 'item3' ]

console.log(array2);
// [ 'item1', 'item2', 'item3' ]

