// // function (that function create object)
// // 2.) add key value pair
// // 3.) object ko return krega
// const user = {};

// function createUser(firstName, lastName, email, age, address) {
//   user.firstName = firstName;
//   user.lastName=lastName;
//   user.email=email;
//   user.age=age;
//   user.address=address;
//   user.about=function(){
//     return `${this.firstName} is ${this.age} years old.`;
//   };

//   user.is18 =  function(){
//     return this.age >= 18;
// }
// return user;

// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18)
// const about = user1.about();
// console.log(about);

// var str="";
// for(var i=0;i<5;i++){
//   for(var j=0;j<5-i;j++){
//    str += "* ";
//   }
//   str+= "\n";
// }
// console.log(str);

// var str="";
// for(var i=1;i<=5;i++){
//   for(var j=0;j<i;j++){
//     str+="* ";
//   }
//   str+="\n";
// }
// console.log(str);


var str="omkartalekar";

var VowelsArray=str.match(/[aeiou]/gi);
console.log(VowelsArray.length);