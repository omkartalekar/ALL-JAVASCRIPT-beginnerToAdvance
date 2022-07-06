// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

const numbers=new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);

console.log(numbers);
// Set(7) { 1, 2, 3, 4, 5, 6, 7 }

if(numbers.has(1)){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}
//  1 is present


for(let number of numbers){
    console.log(number);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7


const newArr=[1,2,2,3,4,6,7,8,9,3,4,5,6,7];
const uniqueElements=new Set(newArr);

for(let element of uniqueElements){
   console.log(element);
}

// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 5