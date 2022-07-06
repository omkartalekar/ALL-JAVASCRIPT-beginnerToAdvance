// lexical environment, scope chain

const lastName = "Talekar";

const printName = function () {

  const firstName = "Omkar";

  function myFunction() {

    console.log(firstName);
    console.log(lastName);
    
  }

  myFunction();

};

printName();
