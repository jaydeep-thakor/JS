// (1) Prototype: a special property that exists on every JavaScript object

// A javascript object is an entity having state(properties) and behaviour(methods) (properties and methods)
const student = {
    name: "Jaydeep", //property
    marks: 89.41,
    printMarks: function(){ // Method 
        console.log("Marks = ", this.marks) // Using this mean we are talking about this object(student), student.marks
    }
}
                               
// console.log(student.printMarks())
console.log(student)

// JS objects have a special property called prototype 
// when you create an Object, javascript by default adds a special property classed prototype (it is an object itself), it has different method and properties

let fruitsArr = ["Orange", "Mango", "Apple", "Papaya"];
fruitsArr.push("Litchi")
// push function is working because it is written in prototypes
// a array contains indices length and prototype
// type of array is object

// If object and prototype have same method, object's method will be used

const employee = {
    // there are two ways to write function or method in a object
    
    // first 
    calcTax1(){
        console.log("Tax rate is 10%")
    },
    // second
    calcTax2 : function (){
        console.log("Tax rate is 12%")
    },
    //  calcTax2 : ()=>{
    //     console.log("Tax rate is 12%")
    // }
}

const Jaydeep = {
    salary: 50000,
}
const August = {
    salary: 52000,
    calcTax1(){
        console.log("Tax rate is 10%")
    } // this one will be used
}
const Hailee = {
    salary: 51000,
}
console.log(Jaydeep)
// we do not have to write methods or function for each employee we can just add prototypes using __proto__
// if there are more than 50 employee we do not have to write methods for each
Jaydeep.__proto__ = employee;
Hailee.__proto__ = employee;
August.__proto__ = employee;

// In JavaScript’s prototype system, if an object and its prototype both contain a method with the same name, the object’s method takes precedence over the prototype’s method.


