// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
const person={
    name:"omkar",
    age:22,
    hobbies:["cricket","sleeping","listening music"]
}

// how to access data from objects 

console.log(person);
console.log(person.name); // omkar
console.log(person["name"]); // omkar 
console.log(person.hobbies);
// [ 'cricket', 'sleeping', 'listening music' ] 
console.log(person.hobbies[2]); // listening music

person["name"]="talekar";
console.log(person["name"]); // talekar

console.log(person);