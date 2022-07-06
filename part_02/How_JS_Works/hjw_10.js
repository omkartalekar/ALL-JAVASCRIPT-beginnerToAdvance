function myFunction(power){
    return function(number){
        return number ** power;
    }
}

const square=myFunction(2);
const ans=square(3);
console.log(ans);