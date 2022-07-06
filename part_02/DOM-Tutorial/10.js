// What is the classList in JS?

// JavaScript classList is a DOM property of JavaScript that allows for styling the CSS (Cascading Style Sheet) classes of an element. JavaScript classList is a read-only property that returns the names of the CSS classes.

const sectionTodo=document.querySelector(".section-todo");

console.log(sectionTodo.classList);

sectionTodo.classList.add("bg-dark");
// add() The function which is used for adding one or more classes to the CSS element.


sectionTodo.classList.remove("container");
// To remove a class from an element, you use the remove() method of the classList property of the element.

const ans=sectionTodo.classList.contains("container");
// classList. contains() method to check if an element contains a specific class name.

console.log(ans);


sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");

// toggle(): The toggle() method is used for toggling the specified class names of an element. It means on one click the specified class gets added and on another click the class gets removed. It is known as the toggle property of an element.




