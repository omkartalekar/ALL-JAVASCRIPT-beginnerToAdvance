// reduce method

// The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change the original array.

const numbers = [1, 2, 3, 4, 5, 10];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  // 100 1
  // 101 2
  // 103 3
  // 106 4
  // 110 5
  // 115 10
  return accumulator + currentValue;
}, 100);

// 2nd argument passed is a starting value of accumulator

console.log(sum); // 125

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice, productPrice) => {
  console.log(totalPrice, productPrice.price);
  // 0 12000
  // 12000 22000
  // 34000 15000

  return totalPrice + productPrice.price;
}, 0);

console.log(totalAmount); // 49000
