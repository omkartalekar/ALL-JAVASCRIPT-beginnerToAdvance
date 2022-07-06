// fill method

// value , start , end 
// end -1 hota hai

// The fill() method fills specified elements in an array with a value. The fill() method overwrites the original array. Start and end position can be specified. If not, all elements will be filled.

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);

console.log(myArray);

// [
//   1, 2, 0, 0,
//   0, 6, 7, 8
// ]