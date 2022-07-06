// clone nodes

const ul=document.querySelector(".todo-list");
const li=document.createElement("li");

li.textContent="new todo";
// The textContent property sets or returns the text content of the specified node, and all its descendants.

const li2=li.cloneNode(true);
// The cloneNode() method creates a copy of a node, and returns the clone. The cloneNode() method clones all attributes and their values.


ul.append(li);
// append() The Document. append() method inserts a set of Node objects or string objects after the last child of the document. String objects are inserted as equivalent Text nodes. This method appends a child to a Document 


ul.prepend(li2);
// prepend() method inserts a set of Node objects or string objects before the first child of the document. String objects are inserted as equivalent Text nodes. This method prepends a child to a Document . To prepend to an arbitrary element in the tree, see Element.