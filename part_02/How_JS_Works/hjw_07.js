// function execution context

let foo="foo";
console.log(foo);

function getFullName(firstName,lastName){
    console.log(arguments);
    // [Arguments] { '0': 'omkar', '1': 'talekar' }

    let myVar="var inside Func";

    console.log(myVar);
    // var inside Func

    const fullName=firstName+" "+lastName;
    return fullName;
}

const personName=getFullName("omkar","talekar");
console.log(personName);
// omkar talekar