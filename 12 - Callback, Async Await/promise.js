// Promise is for "eventual" completion of task. It is an object in JS.

// It is a solution to callback hell.

// resolve and reject are callbacks provided by JS 

// there are total 3 states in promise(promiseState)
// pending 
// fullfilled 
// rejected

// example 1
// const getApiData = () => {
//     return new Promise((resolve, reject)=>{
//         console.log("fetching data");
//         // resolve("success");
//         reject("error")
//     })
// }

// const finalApiData = getApiData();

// finalApiData.then((res)=>{
//     console.log("received api data, performing some tasks on it");
//     console.log(res)
// }).catch((rej)=>{
//     console.log("failed to fetch api data");
//     console.log(rej)
// })


// example 2

// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve();
//         },3000)
//     })
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve();
//         },3000)
//     })
// }

// let promise1 = asyncFun1();

// console.log("fetching data 1");
// promise1.then(()=>{
//     console.log("received data 1")
    
//     let promise2 = asyncFun2();
//     console.log("fetching data 2");
//     promise2.then(()=>{
//         console.log("received data 2")
//     })
// })

// console.log("fetching data 1");
// asyncFun1().then(()=>{
//     console.log("received data 1");

//     console.log("fetching data 2");
//     asyncFun2().then(()=>{
//         console.log("received data 2")
//     })
// })

// example 3

const getDummyData = (dataNumber) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data = ",dataNumber);
            resolve("successfully resolved", dataNumber)
        },2500)
    })
}

// getDummyData(1).then((res)=>{
//     console.log(res);
//     getDummyData(2).then((res)=>{
//         console.log(res);
//         getDummyData(3).then((res)=>{
//             console.log(res);
//             getDummyData(4).then((res)=>{
//                 console.log(res)
//             })
//         })
//     })
// })

// better way to write this is to
// promise chain
getDummyData(1).then(()=>{
    return getDummyData(2);
}).then(()=>{
    return getDummyData(3);
}).then(()=>{
    return getDummyData(4);
}).then((res)=>{
     console.log(res);
})







