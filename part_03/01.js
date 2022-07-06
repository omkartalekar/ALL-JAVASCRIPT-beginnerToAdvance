// Understanding the Synchronous and Asynchronous operations:

// In synchronous operations, operation are performed one at a time. The next operation is unblocked only when the ongoing operation is completed.

// Simple words, you need to wait for a operation in progress to finish, in order to start the next one in the queue.

// In asynchronous operations, the next operation can be started before the previous one finishes.

// Asynchronous programming allows to handling of multiple requests simultaneously, thereby allowing to accomplish more tasks within shorter time span.


// In Synchronous
console.log("Start")
 
 for (let i = 0; i < 5; i++) {
   console.log(i)
 }
 console.log("End")

//  Start
// 0
// 1
// 2
// 3
// 4
// End





// In Asynchronous
console.log("start");

// What is setTimeout in JavaScript?
// setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

setTimeout(()=>{
console.log("middle");
},2000);

console.log("end");

// start
// end
// middle


// Single Thread

// A single-thread language is one with a single call stack and a single memory heap. It means that it runs only one thing at a time. A stack is a continuous region of memory, allocating local context for each executed function. A heap is a much larger region, storing everything allocated dynamically.