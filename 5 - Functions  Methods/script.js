// Functions =  block of code that performs a specific task, can be invoked whenever needed
// Once we return something from function, code after written will never execute

console.log("*********** Functions ***********")

function hello(){
    console.log("Hello World");
}
hello();

// function input is know as parameter
function message(msg){
    console.log(msg);
}
// function call input is know as argument
message("Javascript"); 

function sum(x,y){
    // parameter are local variables of functions, block score
    console.log(x+y);
}
sum(10,20);

function multiplication(a,b){
    let result = a*b; 
    return result;
}
let answer = multiplication(10,20); 
console.log(answer)



console.log("*********** Aerrow Functions ***********")


const aerrowSum = (a,b,c) =>{
    console.log(a+b+c)
}
aerrowSum(25,25,50);
 


// if a aerrow function has a single line there is no need of {}
const printHelloWorld = () => console.log("Hello World")
printHelloWorld();






// A callback function is a function passed as an argument to another function

// function func1(){
//     console.log("Function 1");
//     alert("a")
// }

// function func2(func1){
//     console.log("Function 2")
//     return func1();
// }

// func2(func1);


// ******************** ForEach ********************  
// -- for each is a method
// -- used to perform operations on each elements of array
// forEach((value, idx, arry) foreach returns value, index, array


let cityName = ["hyderabad", "mumbai", "pune", "bangalore"]
cityName.forEach((val)=>{
    console.log(val.toUpperCase())
})

let numbers = [10,20,30,40,50]
numbers.forEach((num, idx, arry)=>{ // this function pass a function as a parameter
    let result = num * 100;
    console.log(result, idx, arry)
})


// Higher Order Function - a function which takes another function as a parameter or return another function  
// for example - forEach is a higher order function or higher order method



// ******************************** Map, Filter, Reduce ********************************

// foreach is used for normal calculation but map is used to calculate operation on each element and to retturn a new array

// (1) - Map - map is similar to forEach but map return a new array 

let arr1 = [1,2,3,4,5];

// to return new array with calculations on each
let mapArr = arr1.map((val)=>{
    return val*val;
})
console.log(mapArr);




// (2) - Filter - return a new array with filtered values

let arr2 = [10,20,30,40,50,60,70,80,90,100];

let filterArr = arr2.filter((val)=>{
    return val > 45;
})
console.log(filterArr)




// (3) - Reduce - to return a new signle value like average, sum, percentage, for that we use reduce

let arr3 = [10,20,30];

let reduceArr = arr3.reduce((prev, curr)=>{
    return prev + curr;
})

console.log(reduceArr)

// to find out largest number of an Array
let numArr = [213,4532,745,23346,68,35,8567,254,894436,4356,7546];

const findLargest = numArr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
    // return prev < curr ? prev : curr; to return smallest value
})

console.log(findLargest)









