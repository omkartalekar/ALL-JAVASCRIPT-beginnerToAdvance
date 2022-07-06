// CallBack Hell

// The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code. So in this situation Promises came to handle the nested callback in a better way.

// Promise

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// A Promise has four states:

// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

const promise = new Promise((resolve, reject) => {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";

  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log("Success, You are a GEEK");
  })
  .catch(() => {
    console.log("Some error has occurred");
  });

// Success, You are a GEEK




// const promise1=new Promise((resolve,reject)=>{


//     resolve("Hello Resolve");
// }).then((res)=>{
// console.log(res);
// }).catch(()=>{
//     console.log("reject");
// })

// Hello Resolve



const bucket=["coffee","chips","vegetables","salt","rice"];


const friedRicePromise=new Promise((resolve,reject)=>{
if(bucket.includes("vegetables") && bucket.includes("salt")){
    resolve({value:"friedRice"});
}
else{
    reject("could not do it");
}
})

friedRicePromise.then((myFriedRice)=>{
    console.log(`let eat ${myFriedRice.value}`);
}).catch((error)=>{
    console.log(error);
})