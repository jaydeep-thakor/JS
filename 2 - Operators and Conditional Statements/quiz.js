// Question (1) - get user to input a number using prompt("Enter a number"), check if the number is a multiple of 5 or not  

// let num = prompt("Enter a number");

// if(num%5 === 0){
//     console.log(num, "is a multiple of 5")
// }else{
//     console.log(num, "is not a multiple of 5")
// }


// Question (2) - Write a code which can give grades to students according to their scores
// 90 - 100 A
// 70 - 89 B
// 60 - 69 C
// 50 - 59 D
// 0 - 49 F

let marks = prompt("Enter your marks")

let grade;

if(marks >= 90 && marks <= 100){
    grade = "A";
}
else if(marks >= 70 && marks <= 89){
    grade = "B";
}
else if(marks >=60 && marks <= 69){
    grade = "C";
}
else if(marks >= 50 && marks <= 59){
    grade = "D";
}
else if(marks >= 0 && marks <= 49){
    grade = "F";
}
else{
    console.log("Invalid Marks")
}

console.log(grade)