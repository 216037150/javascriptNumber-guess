let n = Math.floor(Math.random() * 4) + 1;
console.log(n); // For debugging purposes; 
let guess = parseInt(prompt('Enter the number: '));

while (n !== guess) {
    if (isNaN(guess)) {
        console.log("Enter a valid number.");
    } else if (guess < n) {
        console.log("The number is too low");
    } else if (guess > n) {
        console.log("The number is too big");
    }
    guess = parseInt(prompt('Enter the number: '));
}

console.log("Congratulations, you guessed correct!!!");
