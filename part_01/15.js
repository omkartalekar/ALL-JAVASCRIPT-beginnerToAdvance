// ternary operator 

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.


let age=5;
if(age>6){
    console.log("age is greater");
}
else{
    console.log("age is lesser");
}

const res=age>6?"greater":"smaller";
console.log(res);