// (1) - Primitive Datatypes

let a = 10;
console.log(typeof a, a);


let b = null;
console.log(typeof b, b);


let c = true;
console.log(typeof c, c);


let d = BigInt(100000);
console.log(typeof d, d);


let e = "Jaydeep";
console.log(typeof e, e);


let f = Symbol("@");
console.log(typeof f, f);


let g = undefined;
let h;
console.log(typeof g, g);
console.log(typeof h, h);


// (2) - Non-primitive Datatypes = Objects - key value pair

let details = {
    name : "Jaydeep",
    age : 26,
    city : "Hyderabad"
}

// to get value
console.log(details.name);
console.log(details["age"]);

// to change the value
details.name = "jd";
details["age"] = "27"

console.log(details);



// let is a black scope variable
{
    let city = "Hyderabad"
    console.log(city)
}
// console.log(city) - error city is not defiend because its inside the block, in var case it is not an error


// variable declare rules
// (1) - case sensitive, faang and Faang are different
// (2) - only letters, digits, underscore, and $ are allowed
// (3) - can not start with numbers
// (4) - reserved keywords can not be variable names 




