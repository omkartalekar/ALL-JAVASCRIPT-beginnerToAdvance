
// objects inside array 
// very useful in real world applications

let users = [
    { userId: 1,firstName:"omkar",gender:"male" },
    {userId:2,firstName:"mohit",gender:"male"},
    {userId:3,firstName:"nitish",gender:"male"}
];

for(let user of users){
    console.log(user.firstName);
}
// omkar
// mohit
// nitish

for(let i in users){
    console.log(users[i].firstName);
}
// omkar
// mohit
// nitish