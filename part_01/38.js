// how to iterate object

// for in loop

const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};

for (let key in person) {
//   console.log(person[key]);
  // harshit
  // 22
  // [ 'guitar', 'sleeping', 'listening music' ]

//   console.log(key);
  // name
  // age
  // hobbies
}


console.log(Object.keys(person));
// [ 'name', 'age', 'hobbies' ]


for(let key of Object.keys(person)){
    console.log(person[key]);
}
// harshit
// 22
// [ 'guitar', 'sleeping', 'listening music' ] 

