// splice method 
// start , delete , insert 

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const myArray = ['item1', 'item2', 'item3',"item4","item5"];

// delete
const deletedItem = myArray.splice(1, 2);
console.log("delted item", deletedItem);

// deleted item [ 'item2', 'item3' ];

console.log(myArray);
// [ 'item1', 'item4', 'item5' ]


const ans=myArray.splice(0, 3,'inserted item');
console.log(myArray);
// [ 'inserted item' ]

console.log(ans);
// [ 'item1', 'item4', 'item5' ]