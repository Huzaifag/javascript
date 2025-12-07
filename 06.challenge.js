// Return a random letter from your name

let myName = "Huzaifa Gulzar";


let randomNum = Math.floor(Math.random() * myName.length);
let randomLetter = myName.charAt(randomNum);

console.log("Random letter from my name:", randomLetter);