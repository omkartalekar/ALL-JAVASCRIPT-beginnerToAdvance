
// arrow functions

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; }


const user1={
    firstName:"omkar",
    age:8,
    // about:function(){
    //     console.log(`${this.firstName} ${this.age}`);
    // }
    about:()=>{
        console.log(`${this.firstName} ${this.age}`);
    }
}

user1.about();  // undefined undefined (if we use arrow function)

user1.about(); // omkar 8 (if we use simple function)

