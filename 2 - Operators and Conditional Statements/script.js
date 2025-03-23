let a = 5;
let b = 2;

// (1) - Arithmatic operators
console.log("(1) - Arithmatic operators")
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // modulus
console.log(a**b); // exponentiation

// Unary Operators

// Post Increment 
let a1 = 5;
a1++; // a1 = a1 + 1;    b n   
console.log(a1)
// Pre Increment
let b1 = 50;
++b1; //
console.log(b1)


// Post Decrement 
let c1 = 5;
c1--; // c1 = c1 - 1;     
console.log(c1)
// Pre Decrement
let d1 = 50;
--d1; //
console.log(d1)


// (2) - Assignment operators
console.log("(2) - Assignment operators")
  
let x1 = 20;
x1 += 10; // x1 = x1 + 10;
console.log(x1)

x2 = 20;
x2 -= 5; // x2 = x2 - 5;
console.log(x2)

x3 = 20;
x3 /= 5; // x3 = x3 / 5;
console.log(x3)

x4 = 20;
x4 *= 5; // x4 = x4 * 5;
console.log(x4)

x5 = 20;
x5 %= 5; // x5 = x5 % 5;
console.log(x2)

x6 = 20;
x6 **= 5; // x6 = x6 ** 5;
console.log(x6)




// (3) - Comparison operators
console.log("(3) - Comparison operators")
y1 = 10;
y2 = 20;
// == - it will check only value not type
console.log(y1 == y2)

// === - it will check value as well as type
console.log(y1 === 10)

console.log(y2 != 10); // false
console.log(y2 != 50); // true
   
console.log(y2 !== 10); // false
console.log("10" !== "10"); // true



// (4) - Logical operators
console.log("(4) - Logical operators")

z1 = 5;
z2 = 10;

// && - if both the condition are true, then it returns true, false in all other cases
console.log(z1<z2 && z2<1);

// || if both the condition are false, then it returns false, true in all other cases 
console.log(z1 === 500 || z2 === 1000);

// ! if condition is true it will return false, if condition is false it will return true
console.log(!(z1 === 5)) //false 
console.log(!(z2 === 5000)) //true


// in && 
// T T = T
// T F = F
// F T = F
// F F = F


// in || 
// T T = T
// T F = T
// F T = T
// F F = F

// ******************** Conditional Statements ********************

let age = 18;

// (1) If
if(age >= 18){
    console.log("You can vote")
}

// (2) If else
if(age>20){
    console.log("You can drive the car")
}
else{
    console.log("You can not drive the car")
}

// (3) else-if 
if(age>10){
    console.log("You are 10+")
}
else if(age> 20){
    console.log("You are 20+")
}
else if(age> 30){
    console.log("You are 30+")
}
else{
    console.log("you are 10 or below 10")
}

// the numbers which can be devided by 2%, is known as a even number, (in modules, which gives reminder 0 is known as a even number)
let number = 10;
if(number % 2 === 0){
    console.log("This is a odd number")
}






// (4) - Ternary operator

let abc = 10;
let xyz = 20;

let result = abc > xyz ? abc + xyz : xyz - abc;
console.log(result)



// (5) - Switch case statement











