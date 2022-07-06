// promise && setTimeout 

// I want to resolve / reject promise after 2 seconds 

const promise=new Promise((resolve,reject)=>{
const val=true;
setTimeout(()=>{
    if(val){
        resolve()
    }
    else{
        reject();
    }
},3000)
})

promise.then(()=>{
    console.log("value is true")
}).catch(()=>{
    console.log("value is false")
})

// value is true