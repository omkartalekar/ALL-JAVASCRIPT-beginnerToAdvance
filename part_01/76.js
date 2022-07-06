// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// harshit 8

const user1 = {
    firstName : "harshit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}

// harshit 8



user1.about();

// both are working