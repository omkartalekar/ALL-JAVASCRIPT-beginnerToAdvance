// Function In Javascript

// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// function singHappyBirthday(){
//     console.log("Happy birthday to you ....");
// }
// singHappyBirthday();
// Happy birthday to you ....


// function sumOfThreeNumbers(num1,num2,num3){
//     return num1+num2+num3;
// }

// const res=sumOfThreeNumbers(1,2,3);
// console.log(res); // 6

// function isEven(number){
    // return number % 2 === 0;
//     return number % 2===0 ? true : false;
// }
// console.log(isEven(5)); // false



// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array,target){
    for(let i of array){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myArray=[1,2,3,4,5];
const ans=findTarget(myArray,4);
console.log(ans); // ans = 3