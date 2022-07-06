// callback functions 

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callBack){
    console.log("hello there I am a func and I can");
    callBack("harshit");
    
}

myFunc(myFunc2);

// hello there I am a func and I can
// inside my func 2
// your name is harshit