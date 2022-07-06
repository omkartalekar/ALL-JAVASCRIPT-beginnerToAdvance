// lexical scope
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.


const myVar="value1";

 function myApp (){
    console.log("inside myFunc",myVar1); // not defined

    function myFunc(){
        const myVar1="value259";

        const myFunc2=()=>{
            console.log("inside myFunc",myVar);
            
        }
        myFunc2();
    }
    console.log(myVar); // not defined
    myFunc();
}


myApp();