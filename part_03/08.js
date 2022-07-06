// async await

// When should I use async await JavaScript?

// Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.


const getData=(async()=>{
    var y=await "hello world";
    console.log(y);
})
console.log(1);
getData();
console.log(2);

// 1
// 2
// hello world

