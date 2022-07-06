// function returning another function 

function myFunc(){
    // also work the same
    function hello(){
        return "hello world";
    }
    return hello;
}

// also works the same

// function hello(){
//     return "hello world";
// }

const ans=myFunc();

console.log(ans());