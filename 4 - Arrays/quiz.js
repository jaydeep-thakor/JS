// Que 1 = For the given array with marks of students [85,97,44,37,76,60] find the average marks of the entire class

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let value of marks){
//     sum += value;
// }

// let avg = sum / marks.length;
// console.log(`the total average marks is ${avg}`)


// Que 2 = For a given array with prices of 5 items [250, 645, 300, 900, 50] all items have an offer of 10% OFF in them. change the array to store final price after applying offer.

// let originalPrice1 = [250, 645, 300, 900, 50];
// let inx = 0;
// for(let value of originalPrice1){
//     let result = value/10;
//     originalPrice1[inx] = originalPrice1[inx] - result;
//     inx++;
// }
// console.log(originalPrice1)

// let originalPrice2 = [250, 645, 300, 900, 50];

// for(let i = 0; i<originalPrice2.length; i++){
//     let discount = (originalPrice2[i] * 10)/100;
//     originalPrice2[i] = originalPrice2[i] - discount;
// }

// console.log(originalPrice2)


// Que 3 - Create an array to store companies -> "Bloomburg", "Microsoft", "Uber", "Google", "IBM","Netflix"
// a - Remove the first company from the array
// b - Remove Uber & add Ola in its place
// c - Add Amazon at the end

let companies = ["Bloomburg", "Microsoft", "Uber", "Google", "IBM","Netflix"];

//a
companies.shift();
console.log(companies)

//b
companies.splice(1,1,"Ola")
console.log(companies)

//c
companies.push("amazon")
console.log(companies)


// Que 4 - discount calculator
let price = [];

let discount = parseInt(prompt("enter discount = "));
let arrItems = parseInt(prompt("enter length = "));

for(let i = 0; i<arrItems; i++){
    let value = parseInt(prompt("enter price"));
    price.push(value);
}

console.log("price before discount", price);

const calculateDiscount = (discount) => {
    
    for(let i = 0; i<price.length; i++){
        
        let result = price[i] / discount;
        
        price[i] = price[i] - result;
        
    }
    
}
calculateDiscount(discount);
console.log("price after discount", price);




