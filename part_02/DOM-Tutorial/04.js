// InnerText

// The innerText property of JavaScript is used to get or set the text inside an HTML element and its descendants. 

// The innerText has a similar working phenomenon to innerHTML. Both properties manipulate the content of an HTML element but with different aspects

const mainHeading=document.getElementById("main-heading");

console.log(mainHeading.innerText);


// What is textContent in JavaScript?

// The textContent property sets or returns the text content of the specified node, and all its descendants.

mainHeading.textContent="This is something else";


// What is the difference between textContent and innerHTML?

// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.