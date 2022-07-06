// important array methods 

const numbers=[4,2,5,8];


numbers.forEach(function(number,index){
console.log(`index is ${index} number is ${number}`)
})
// index is 0 number is 4
// index is 1 number is 2
// index is 2 number is 5
// index is 3 number is 8



const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

users.forEach(function(user,index){
console.log(`${user.firstName} and index is ${index}`);
})

// harshit and index is 0
// mohit and index is 1
// nitish and index is 2
// garima and index is 3


users.forEach((user,index)=>{
    console.log(`${user.firstName} and index is ${index}`);
})
// harshit and index is 0
// mohit and index is 1
// nitish and index is 2
// garima and index is 3


for(let user of users){
    console.log(user.firstName);
}