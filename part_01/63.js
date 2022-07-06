// some method

// The some() method checks if any array elements pass a test (provided as a callback function). The some() method executes the callback function once for each array element. The some() method returns true (and stops) if the function returns true for one of the array elements.

// kya ek bhi number esa hai jo even hai 
// then true 

const numbers = [3,5,8,9];

 const ans = numbers.some((number)=>number%2===0);
console.log(ans); //true


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 225000},
]

const res = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(res); // true