// difference between dot and bracket notaion


const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["hobbies"]);
// [ 'guitar', 'sleeping', 'listening music' ]

person.key = "harshitvashisth@gmail.com";
console.log(person);
// {
//   name: 'harshit',
//   hobbies: [ 'guitar', 'sleeping', 'listening music' ],
//   key: 'harshitvashisth@gmail.com'
// }


person[key]="harshitvashisth@gmail.co"
console.log(person);
// {
//     name: 'harshit',
//     age: 22,
//     hobbies: [ 'guitar', 'sleeping', 'listening music' ],
//     key: 'harshitvashisth@gmail.com',
//     email: 'harshitvashisth@gmail.co'
//   }