// rest parameters

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

function myFunc(a,b,...c){
    console.log(a); // 3
    console.log(b); // 4
    console.log(c); // [ 5, 6, 7, 8, 9 ]
}

myFunc(3,4,5,6,7,8,9);


function addAll(...numbers){
    let total=0;
 
    for(let number of numbers){
        total+=number;
    }
    return total;
}
const ans=addAll(2,3,4,5,6,7,8,9); // 44
console.log(ans);