// while loop in array 
const fruits = ["apple", "mango", "grapes"];

let fruits1=[];

let i=0;
while(i<fruits.length){
    fruits1.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits1);