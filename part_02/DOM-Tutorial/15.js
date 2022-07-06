// intro to events
// click 
// event add karne ke 3 tarike hai 

const btn=document.querySelector(".btn-headline");

// method addEventListener

// The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired. Any number of event handlers can be added to a single element without overwriting existing event handlers.

// 1st option
btn.addEventListener("click",function(){
    console.log("you clicked me");
})

// 2nd option
btn.addEventListener("click",()=>{
    console.log("Arrow Function");
})