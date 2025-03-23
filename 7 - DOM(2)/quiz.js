// Que 1 = Create a new button element. Give it a text "click me", background color of red & text color of white.
// insert the button as the first element inside the body tag

let button = document.createElement("button");
button.innerText = "Click Me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);



// Que 2 = create a <p> tag in HTML, give it a class & some styling.
// now create a new class in CSS and try to append this class to the <p> element.

let para = document.querySelector(".para");
// para.setAttribute("class", "newpara")  it will replace my old class better we use classList
para.classList.add("newpara");





