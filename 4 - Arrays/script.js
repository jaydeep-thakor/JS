// let marks = [98,87,96,85,77]
// console.log(marks)
// console.log(marks[0])

// marks[0] = 100;
// console.log(marks)

let heros = ["batman", "spiderman", "antman", "ironman", "thor", "hulk"]
// console.log(heros)


for(let i=0; i<heros.length; i++){
    console.log(heros[i])
}


console.log("********************* Array Methods *********************");
let fruits = ["apple","litchi","kiwi","mango"];

// (1)
console.log(fruits);
fruits.push("orange"); // to add a item at the end
fruits.push("orange","blueberry"); // to add multiple items at the end
console.log(fruits);

// (2)
fruits.pop();
console.log(fruits); // to remove last item of an array 

// (3)
let arrStr = fruits.toString();
console.log(arrStr) // to convert an array to a string, it will not change the existing array it will return a new array

//(4)
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [11,12,13,14,15];

let finalarr = arr1.concat(arr2, arr3)
console.log(finalarr)

//(5)
let heros1 = ["batman", "spiderman", "antman", "ironman", "thor"]
heros1.unshift("hulk") // to add a item at the starting, work same as push method
console.log(heros1)

heros1.shift();
console.log(heros1) // to remove a item from starting, work same as pop method

//(6)
let newArr = ["apple","litchi","kiwi","mango"];
console.log(newArr.slice(1,3)); // it wil not change existing array



let numberArr = [1,2,3,4,5,6,7,8,9,10];
// splice(startIndex, deleteCount, newElements)
// if we do not want to remove deleteCount, we pass it 0 there splice(2,0,100,200,300)
// if we just want to delete elements, we only write splice(2,4)
// to replace a element splice(1,3,1000)
// splice(4) to return remaining array from index 4
numberArr.splice(2,5,100,200,300,400)
console.log(numberArr)
