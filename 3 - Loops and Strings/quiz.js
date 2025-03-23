// Que 1 = Print all even numbers from 0 to 100.

// for(let i = 0; i<=100; i++){
//     if(i%2 === 0){
//         // Even Number
//         console.log(i);
//     }

    // if(i%2 !== 0){
        // Odd Number
        // console.log(i);
    // }

// }




// Que 2 = Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.


// let randomNumber = 25;
// let userInput = prompt("Enter a number = ")

// while(randomNumber != userInput){
//     userInput = prompt("You gussed wrong, try again =")
// }

// console.log("Congratulations, You gussed right number")



// Que 3 = Prompt the user to enter their full name. Generate a username for them based on the input. start username with @, followed by their full name and ending with the fullname length.

let fullName = prompt("Enter Your Name");
let userName = `Your generated username is @${fullName}${fullName.length}`
console.log(userName)






