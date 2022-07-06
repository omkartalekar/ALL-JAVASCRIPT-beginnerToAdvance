// map method

// map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.

const ages=[23,45,43,12,34];
const ans=ages.map((value,index)=>{
   return (`${value} and index is ${index}`)
})

console.log(ans);
// [
//     '23 and index is 0',
//     '45 and index is 1',
//     '43 and index is 2',
//     '12 and index is 3',
//     '34 and index is 4'
//   ]

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);
//  [ 'harshit', 'mohit', 'nitish', 'garima' ]