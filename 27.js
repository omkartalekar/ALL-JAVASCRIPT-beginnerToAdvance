

let fruits=["apple","mango","grapes"];
console.log(fruits);
// [ 'apple', 'mango', 'grapes' ]


//push 
// The push() method adds new items to the end of an array. The push() method changes the length of the array. The push() method returns the new length.

fruits.push("banana");
console.log(fruits);
// [ 'apple', 'mango', 'grapes', 'banana' ]


// pop 
// The pop() method removes (pops) the last element of an array. The pop() method changes the original array. The pop() method returns the removed element.

fruits.pop();
console.log(fruits);
// [ 'apple', 'mango', 'grapes' ]



// shift
// The shift() method in JavaScript removes an item from the beginning of an array and shifts every other item to the previous index.

fruits.shift();
console.log(fruits);
// [ 'mango', 'grapes' ]



//  unshift
// The unshift() method adds an item to the beginning of an array while shifting every other item to the next index.

fruits.unshift("banana");
console.log(fruits);

// [ 'banana', 'mango', 'grapes' ]
