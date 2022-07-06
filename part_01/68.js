// Maps

// map is an iterable

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, numb

const person=new Map();

person.set("firstName","Omkar");
person.set("age",7);
person.set([1,2,3],"oneTwoThree");
person.set({1:"one"},"oneTwoThree");

console.log(person);
// Map(4) {
//     'firstName' => 'Omkar',
//     'age' => 7,
//     [ 1, 2, 3 ] => 'oneTwoThree',
//     { '1': 'one' } => 'oneTwoThree'
//   }



console.log(person.get(1));
// undefined

for(let key of person.keys()){
     console.log(key,typeof(key));
}

// firstName string
// age string
// [ 1, 2, 3 ] object
// { '1': 'one' } object


for(let [key,value] of person){
    console.log(Array.isArray(key));
        // console.log(key,value);
    }

// false
// firstName Omkar
// false
// age 7
// true
// [ 1, 2, 3 ] oneTwoThree
// false
// { '1': 'one' } oneTwoThree


const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id); // 1
console.log(extraInfo.get(person1).gender);//male
console.log(extraInfo.get(person2).gender); //female