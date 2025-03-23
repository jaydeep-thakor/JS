// Que 1 = Create a H2 heading element with text - "Hello JavaScript". append "from Apna College students" to this text using JS.

let headingTwo = document.querySelector(".heading-2");
// headingTwo.append(" from Apna College students");
// headingTwo.innerText = headingTwo.innerText + " from Apna College students";



// Que 2 = Create 3 divs with common class name = "box". access them & add some unique text to each of them.

let boxes = document.querySelectorAll(".box");

boxes[0].innerText = "New unique value 1";
boxes[1].innerText = "New unique value 2";
boxes[2].innerText = "New unique value 3";


let idx = 1;
for(let boxdiv of boxes){
    boxdiv.innerText = `New unique value ${idx}`;
    idx++;
}

