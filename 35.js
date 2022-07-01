// Array Destructuring

//  Destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.

const fruits=["banana","apple","mango","grapes"];

// const [fruit1,fruit2,fruit3,fruit4]=fruits;
// console.log(fruit3); //mango


const [fruit1,fruit2,...fruitArray]=fruits;
console.log(fruitArray);
//  [ 'mango', 'grapes' ]

// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
