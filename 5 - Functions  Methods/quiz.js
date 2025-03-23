// Que 1 = Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

// function countVowel(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(`The total vowel in the str is ${count}`)
// }
// countVowel("aaasfghaskjfhawsjkgbhkdejfgbhiiiii");


// Que 2 = For a given array of numbers, print the square of each value using the for each loop

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((x)=>{
//     let result = x*x;
//     // let result = x**2;
//     console.log(result)
// })


// let arr1 = [1,2,3,4,5,6,7,8,9,10];

// const findSquare = (x) => {
//     let result = x*x;
//     console.log(result)
// }

// arr1.forEach(findSquare);


// Que 3 = We are given array of marks of students. Filter out of the marks of students that scored 90+.

// let marks = [67,85,84,96,76,81,93]

// let FilterMarks = marks.filter((n)=>{
//     return n > 90;
// })

// console.log(FilterMarks)




// Que 3 = Take a number n as ipnut from user. create an array of numbers from 1 to n.
// - Use the reduce method to calculate sum of all numbers in the array
// - Use the reduce method to calculate product of all numbers in the array

let inputNumber = prompt("Enter a number =");

let emptyArr = [];

for(let i = 1; i<=inputNumber; i++){
    emptyArr[i-1] = i;
}

console.log(emptyArr)

let totalNumber = emptyArr.reduce((res,curr)=>{
    return res + curr;
})
console.log(`The total of number of array is = ${totalNumber}`)



let factorial = emptyArr.reduce((res, curr)=>{
    return res * curr;
})

console.log(`Factorial = ${factorial}`)







