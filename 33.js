// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);
// [ 'APPLE', 'MANGO', 'GRAPES', 'FRUIT4', 'FRUIT5' ]



for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// apple
// mango
// grapes
// fruit4
// fruit5



for(let fruit of fruits2){
    console.log(fruit);
}
// APPLE
// MANGO
// GRAPES
// FRUIT4
// FRUIT5