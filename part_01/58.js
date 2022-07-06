// filter method


const ages =[1,2,3,56,43,21,5,67];

const ans=age.filter((age)=>{
    return age > 4;
})

console.log(ans); // [ 56, 43, 21, 5, 67 ]


const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});


console.log(evenNumbers);
// [ 2, 6, 4, 8 ]