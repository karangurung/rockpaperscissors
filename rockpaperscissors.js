console.log("Hello, World!")

// creat a function called getComputerChoice 
// it will Return a random "Rock", "Paper" or "Scissor"

function getComputerChoice() {
    let randomnumber = Math.floor (Math.random() * 3);
    if (randomnumber === 2) {
        return "Rock";
    } else if (randomnumber === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}
console.log (getComputerChoice());



