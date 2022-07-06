// every method 

// The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element.


const numbers = [2,4,6,8,10]; // true
// const numbers = [2,4,6,9,10]; // false

const ans = numbers.every((number)=>number%2===0);

console.log(ans);  // true


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]

const res=userCart.every((cartItem)=>{
    return cartItem.price < 30000; // false
    // return cartItem.price < 36000; // true
})
console.log(res); // false
