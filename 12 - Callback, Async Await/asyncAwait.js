// Synchronous - Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution

// Asynchronous - Due to synchronous programming, sometimes imp instructions get block due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// Synchronous
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

// Asynchronous
// setTimeout and setInterval are asynchronous functions.
// function hello(){
//     console.log("hello")
// }
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// }, 2000);
// console.log("three");
// console.log("four");

function dummyApi(weatherDataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data",weatherDataId);
            resolve(200);
        },2000)
    })
}

// async function always returns a promise
// await pauses the execution of its surrounding async function until the promise is settled

async function getWeatherData(){
    console.log("getting data 1");
    await dummyApi(1); // 1st call
    console.log("getting data 2");
    await dummyApi(2); // 2st call
    console.log("getting data 3");
    await dummyApi(3); // 3st call
    console.log("getting data 4");
    await dummyApi(4); // 4st call
    console.log("getting data 5");
    await dummyApi(5); // 5st call
    console.log("getting data 6");
    await dummyApi(6); // 6st call
    console.log("getting data 7");
    await dummyApi(7); // 7st call
}

getWeatherData();


