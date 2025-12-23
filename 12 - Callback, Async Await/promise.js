// Promise is for "eventual" completion of task. It is an object in JS.

// It is a solution to callback hell.

// resolve and reject are callbacks provided by JS 

// there are total 3 states in promise(promiseState)
// pending 
// fullfilled 
// rejected

// const getNewData = (data) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(data)
//             resolve("success");
//         }, 2000)
//     })
// }

// let finalResult = getNewData("some data");
// console.log(finalResult)
// setTimeout(()=>{
//     console.log(finalResult)
// },3000);

const getApiData = () => {
    return new Promise((resolve, reject)=>{

        console.log("fetching data");
        // resolve("success");
        reject("error")

    })
}

const finalApiData = getApiData();

finalApiData.then((res)=>{
    console.log("received api data, performing some tasks on it");
    console.log(res)
}).catch((rej)=>{
    console.log("failed to fetch api data");
    console.log(rej)
})


