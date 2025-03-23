// (1)- For Loop
console.log("For Loop")
for(let i = 0; i<=5; i++){
    console.log(i)
}

// *** Calculate sum of 1 to 5
let sum = 0;
for(let i = 0; i<=5; i++){
    sum = sum + i;
}
console.log(sum)



// (2)- While Loop
console.log("While Loop")
let a = 0;
while(a<=10){
    console.log(a);
    a++
}


// (3)- Do While Loop
console.log("Do While Loop")
let x = 5;
do{
    console.log(x);
    x++
}while(x<=1)


// (4)- For Of Loop - used for strings and array

let programmingLanguage = "JavaScript";

for(let i of programmingLanguage){
    console.log(i)
}



// (5)- For in Loop - used for objects

const details = {
    name : "Jaydeep",
    cgpa : 100,
    designation : "FDE",
    isPass : true
}

for(let i in details){
    console.log("key =",i, "value =",details[i])
}





