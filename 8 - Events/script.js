let btn = document.querySelector("#btn");


// onclick written in js has higher priority than inline onclick 
btn.onclick = () =>{
    console.log("btn was click");
    let a = 20;
    a++;
    console.log(a)
}

// if we define onclick again, last onclick will Worker, it will overright previous onclick with functionality, but in event listener like addEventListener we can write multiple events and each of them will work

let box = document.querySelector(".box");
box.onmouseover = (evt) => {
    console.log("box was hovered");
    // console.log(evt.clientX);
    // console.log(evt.clientY);
}


let btnEvents = document.querySelector("#btnEvents");
btnEvents.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}




let eventListenerBtn = document.querySelector("#Event-Listener-btn")

// we can give multiple event to same element using event listener and it will not affect each other, each of them will work

eventListenerBtn.addEventListener("click", ()=>{
    console.log("Handler 1");
})

eventListenerBtn.addEventListener("click", ()=>{
    console.log("Handler 2");
})

let handler3 = () =>{
    console.log("Handler 3")
}
eventListenerBtn.addEventListener("click", handler3)


eventListenerBtn.addEventListener("click", ()=>{
    console.log("Handler 4");
})

eventListenerBtn.addEventListener("click", ()=>{
    console.log("Handler 5");
})



// to remove event listener we will have to store addevent listener in a variable
eventListenerBtn.removeEventListener("click", handler3)