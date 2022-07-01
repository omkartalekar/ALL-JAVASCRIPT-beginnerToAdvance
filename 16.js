// AND  OR operator 

// If applied to boolean values, the && operator only returns true when both of its operands are true (and false in all other cases), while the || operator only returns false when both of its operands are false (and true in all other cases)


let firstName="OMKAR";
let age=18;

// AND &&
if(firstName[0]=="O" && age>17){
    console.log(true); //true answer
}
else{
    console.log(false);
}



// OR ||

if(firstName[0]=="O" || age>19){
    console.log(true); // answer true;
}
else{
    console.log(false);
}