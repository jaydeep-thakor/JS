// (1)- strings

let str = "JavaScript";
console.log(str)

console.log(str.length);
console.log(str[2])

// (2) - Templete Litrals

let obj = {
    item : "pen",
    price : 100
};

let output = `The price of the ${obj.item} is ${obj.price} rupees`
console.log(output)

// (3) - Escape Character 
// \n - new line
// \t - tab

let name = "jaydeep"; //length = 7
let name1 = "jay\tdeep"; //length = 8

// (4) String Methods
// - Strings are immutable -  it can not be changed

let designation = "Front End Engineer"

designation = designation.toUpperCase(); // it will not change real existing string
console.log(designation);



designation = designation.toLocaleLowerCase();
console.log(designation);



let designation1 = "          Front End Engineer           "
console.log(designation1)
designation1 = designation.trim(); // it removes white spaces from starting and ending
console.log(designation1);



let text1 = "Software Engineer";
console.log(text1.slice(2,9)) // 2 is included but 9 is non inclusive
console.log(text1.slice(2)) // second parameter is optional, it will return whole string from 2



let str1 = "Web";
let str2 = "Designer";

let result = str1.concat(str2); // let result = str1 + str2; both are same 
console.log(result)



let oldDesignation = "frontend engineer";
let newDesignation = oldDesignation.replace("frontend", "software");
console.log(newDesignation);



let programmingLanguage = "JavaScript";
console.log(programmingLanguage.charAt(2));





