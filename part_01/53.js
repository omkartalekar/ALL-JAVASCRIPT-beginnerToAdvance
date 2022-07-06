// param destructuring

// Destructuring in JavaScript is used to unpack or segregate values from arrays or properties from object literals into distinct variables, thus it allows us to access only the values required.

const person = {
  firstName: "omkar",
  gender: "male",
  age: 500,
};

function printDetails(obj) {
  console.log(obj.firstName);
  console.log(obj.gender);
}


// param destructuring
function printDetails({ firstName, gender, age }) {
  console.log(firstName); // omkar
  console.log(gender);  // male
  console.log(age); //  500
}

printDetails(person);
