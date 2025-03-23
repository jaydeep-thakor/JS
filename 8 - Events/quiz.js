// Que 1 = Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

let modeBtn = document.querySelector("#mode-btn")

modeBtn.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("dark-mode");
})


