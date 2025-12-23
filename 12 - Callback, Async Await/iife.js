// An Immediately Invoked Function Expression (IIFE), pronounced "iffy," is a JavaScript function that runs as soon as it is defined

(function (){
    console.log("iify using function keyword")
})();

(()=>{
    console.log("iify using arrow function")
})();

(async ()=>{
    console.log("iify using arrow function with async keyword")
})();

