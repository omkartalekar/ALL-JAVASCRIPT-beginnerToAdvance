// arrow functions

const singleHappyBirthday=()=>{
    console.log("happy birthday to you ....");
}

singleHappyBirthday();
// happy birthday to you ....


const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans=sumThreeNumbers(2,3,4);
console.log(ans); // 9


// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(4)) // true

const isEven=number => number % 2 === 0 ;
console.log(isEven(3));  // false


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const array=[1,2,3,4,5,6,7];
const res=findTarget(array,4);
console.log(res); // 3