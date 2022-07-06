// find method

// The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found.

const myArray = ["Hello", "catt", "dog", "lion"];



const ans=myArray.find((string)=>{
return string.length === 4;
})
console.log(ans); // catt




const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser); 
//{ userId: 3, userName: 'nitish' }