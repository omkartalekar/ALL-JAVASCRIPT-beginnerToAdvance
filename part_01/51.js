// default parameters

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed


function addTwo(a,b){
    if(typeof(b)==="undefined"){
        b=0;
    }
    return a+b;
}
const ans=addTwo(4); // It takes b as a undefined so the answer is 4+0=4 
console.log(ans); //4

const ans2=addTwo(4,8); // 12


function addTwo1(a,b=0){
    // b has a default value 0 if no value passed for b then he uses that value 
    return a+b;
}

const ans3 = addTwo1(4, 8);
console.log(ans3);
