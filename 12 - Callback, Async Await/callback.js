// pass a function as an argument knows as callback

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, callB){
// run callback function only if it is there
//     if(callB){ 
//     callB(a,b);
//     }
//     console.log("running calculator function")
// }

// calculator();

function getData(arg, getDataNext){
    setTimeout(()=>{
        if(arg){
            console.log(arg)
        }
        if(getDataNext){
            getDataNext();
        }
    }, 2000)
}

// calllback hell
getData("Hello11", ()=>{
    getData(undefined,()=>{
        getData("Hello33", ()=>{
            getData("Hello44")
        })
    })
});

