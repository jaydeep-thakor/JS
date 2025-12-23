// Synchronous - Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution

// Asynchronous - Due to synchronous programming, sometimes imp instructions get block due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// Synchronous
console.log("one");
console.log("two");
console.log("three");
console.log("four");

// Asynchronous
// setTimeout and setInterval are asynchronous functions.
function hello(){
    console.log("hello")
}
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
}, 2000);
// setInterval(hello, 2000);
console.log("three");
console.log("four");

