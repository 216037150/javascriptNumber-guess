let n = Math.floor(Math.random() * 4) + 1;
console.log(n); 
let guess = parseInt(prompt('Enter the number: '));

while (n !== guess) {
    if (guess < n) {
        console.log("The number is too low");
        guess = parseInt(prompt('Enter the number: '));
    } else if (guess > n) {
        console.log("The number is too big");
        guess = parseInt(prompt('Enter the number: '));
    }
}

console.log("Congratulations, you guessed correct!!!");
