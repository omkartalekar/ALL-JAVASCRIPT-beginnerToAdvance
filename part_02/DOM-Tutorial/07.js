// get multiple elements using getElements by class name 

// get multiple elements items using querySelectorAll

// getElementsByClassName()

//  The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). When called on the document object, the complete document is searched, including the root node

// const navItems=document.getElementByClassName("nav-item")

// What is the difference between querySelectorAll and getElementsByClassName?

// About the differences, there is an important one in the results between querySelectorAll and getElementsByClassName : the return value is different. querySelectorAll will return a static collection, while getElementsByClassName returns a live collection.

console.log(Array.isArray(navItems));

//  The querySelectorAll() method returns all elements that matches a CSS selector(s). The querySelectorAll() method returns a NodeList. The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid.

const navItems=document.querySelectorAll(".nav-item");