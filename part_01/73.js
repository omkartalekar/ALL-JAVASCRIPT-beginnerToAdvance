
// call method

// The call() method allows function calls belonging to one object to be assigned and it is called for a different object. It provides a new value of this to the function.

// The call() method allows you to write a method once and allows it for inheritance in another object, without rewriting the method for the new object.

const person = {
    fullName: function(hobby1,hobby2) {
      return this.firstName + " " + this.lastName+" "+ hobby1 +" "+ hobby2;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  const myFunc=person.fullName.call(person1,"playing cricket","listening songs");
  console.log(myFunc);