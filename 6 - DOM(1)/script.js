console.log(window.document) // to print html as it is 
console.dir(window.document) // to print document object

// 3 ways to target using getElement
let btnClick = document.getElementById("click-btn");
let container = document.getElementsByClassName("container");
let para = document.getElementsByTagName("p")


// --> Node
// firstChild
// lastChild


// --> dom tree nodes,
// (1) - text nodes
// (2) - comment
// (3) - elements


// (1) - parent
// (2) - child
// (3) - descendants

// siblings


// 2 ways to target using querySelector

let paragraph1 = document.querySelector(".para"); // it will target only first paragraph from dom tree
let paragraph2 = document.querySelectorAll(".para"); // it will target all the paragraph


// DOM Manipulation
// --> Properties
// (1) tagName = returns tag for element nodes
// (2) innerText = returns the text content of the element and all its children
// (3) innerHTML = returns the plain text or HTML contents in the element
// (4) textContent = returns textual content even for hidden elements (for example If we have heading tag with css visibility hidden, innerText will not return the text but textContent will return text)

let containerDiv = document.querySelector(".container-div");
console.dir(containerDiv);
console.log(containerDiv.innerText); // it return only text
console.log(containerDiv.innerHTML); // it return text with tags

containerDiv.innerText = "Hello World" // we can pass only text in innerText
containerDiv.innerHTML = "<i>Hello World</i>" // we can pass tags with text in innerHTML





