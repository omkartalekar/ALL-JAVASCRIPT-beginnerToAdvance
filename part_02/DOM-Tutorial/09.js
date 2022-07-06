// innerHTML

// What is an innerHTML?

// The innerHTML property is part of the Document Object Model (DOM) that allows Javascript code to manipulate a website being displayed. Specifically, it allows reading and replacing everything within a given DOM element (HTML tag).02

// Why you shouldn't use innerHTML?

// The use of innerHTML creates a potential security risk for your website. Malicious users can use cross-site scripting (XSS) to add malicious client-side scripts that steal private user information stored in session cookies. You can read the MDN documentation on innerHTM

const headline=document.querySelector(".headline");
headline.innerHTML="<h1>Inner html changed</h1>";
headline.innerHTML += "<button class=\"btn\">Learn More </button>";