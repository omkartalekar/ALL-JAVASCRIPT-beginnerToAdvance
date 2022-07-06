const user={
     about:function(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}
}

const user1={
firstName:"omkar",
age:8
}

const user2={
    firstName:"mohit",
    age:9
}

// apply method

// The apply() method is an important method of the function prototype and is used to call other functions with a provided this keyword value and arguments provided in the form of array or an array like object.

user.about.apply(user1,["guitar", "bach"]);
// omkar 8 guitar bach


// bind method

// With the bind() method, an object can borrow a method from another object. The example below creates 2 objects (person and member).


// We use the Bind() method to call a function with the this value, this keyword refers to the same object which is currently selected . In other words, bind() method allows us to easily set which object will be bound by the this keyword when a function or method is invoked.


// Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.



const func=user.about.bind(user2,"guitar", "bach");
func();
// mohit 9 guitar bach

