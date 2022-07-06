console.log("hello");

// What is setInterval JavaScript?

// setInterval() The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval() .

// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

const hell=setInterval(()=>{
    console.log("Hello world");

},5000)
console.log("world");



// The clearInterval() function in javascript clears the interval which has been set by setInterval() function before that. setInterval() function takes two parameters. First a function to be executed and second after how much time (in ms). setInterval() executes the passed function for the given time interval.

clearInterval(hell);
