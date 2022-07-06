// What is callback function in JavaScript?
// A JavaScript callback is a function which is to be executed after another function has finished execution.

// The callback is a function that's accepted as an argument and executed by another function (the higher-order function).

// understand callback

function myFunc(callback) {
 
  console.log("Function is doing task 1");

  callback();
}

//Function is doing task 1
// Hi I am callback

function hello() {
  console.log("Hi I am callback");
}
myFunc(hello);


function getTwoNumbersAdd(number1,number2 , success,failure){

    if(typeof(number1) ==="number" && typeof(number2)==="number"){

        success(number1,number2);

    }
    else{
        failure();
    }

}

const success=(number1,number2)=>{
console.log(number1+number2);
}

const failure=()=>{
    console.log("Wrong data type");
    console.log("please pass numbers only");
}

// const res=getTwoNumbersAdd(5,"6",success,failure);
// Wrong data type
// please pass numbers only

const res=getTwoNumbersAdd(5,6,success,failure);
// 11

