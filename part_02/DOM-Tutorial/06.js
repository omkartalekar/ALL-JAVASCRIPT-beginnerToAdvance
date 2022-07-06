// get and set attrubutes

// HTML DOM getAttribute() method is used to get the value of the attribute of the element. By specifying the name of the attribute, it can get the value of that element. To get the values from non-standard attributes, we can use the getAttribute() method.

// setAttribute() Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.



const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement=document.querySelector(".form-todo input");

console.log(inputElement.getAttribute("type"));