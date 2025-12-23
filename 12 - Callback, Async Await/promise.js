// Promise is for "eventual" completion of task. It is an object in JS.

// It is a solution to callback hell.

// resolve and reject are callbacks provided by JS 

// there are total 3 states in promise(promiseState)
// pending 
// fullfilled 
// rejected

// let promise = new Promise((resolve, reject)=>{
//     console.log("promise resolved");
//     resolve("success")
// })

const getNewData = (data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(data)
            resolve("success");
        }, 2000)
    })
}

let finalResult = getNewData("some data");
console.log(finalResult)
setTimeout(()=>{
    console.log(finalResult)
},3000)



