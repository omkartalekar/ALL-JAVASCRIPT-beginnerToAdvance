// What is optional chaining for?

// Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .


const user={
    firstName:"omkar",
    address:{houseNumber:"1234"}
}

console.log(user?.first);
// undefined

// As we can see, we will get undefined instead of an error. This happens because of optional chaining operator.


console.log(user?.address?.houseNumber); // 1234



