// (1) = getAttribute
let button = document.querySelector("#btn")

let getId = button.getAttribute("id");
console.log(getId)

let getName = button.getAttribute("name");
console.log(getName)

console.log(button.getAttribute("class"));


// (2) = getAttribute

let para = document.querySelector("p");
para.setAttribute("class", "para")

// (3) = style
let box = document.querySelector(".box");
box.style.backgroundColor = "yellow";
box.style.color = "black";



// (4) = Insert

let insertDiv = document.querySelector("#insertTags");
let paragraph = document.createElement("p");
paragraph.innerText = "I am a paragraph created using JS";

insertDiv.append(paragraph);
// insertDiv.prepend(paragraph);
// insertDiv.before(paragraph);
// insertDiv.after(paragraph);

// to remove element
let deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", ()=>{
    deleteBtn.remove();
})


let heading = document.createElement("h1");
heading.innerHTML = "<i>Document Object Modal</i>"
heading.style.textAlign = "center";
heading.style.textDecoration = "underline"

document.querySelector("body").prepend(heading);








