let n = Math.floor(Math.random() * 4) + 1;

let guess;

while (n !== guess) {
    try {
        guess = parseInt(prompt('Enter the number: '));

        if (isNaN(guess)) {
            throw new Error("Invalid input");
        }

        if (guess < n) {
            console.log("The number is too low");
        } else if (guess > n) {
            console.log("The number is too big");
        }
    } catch (error) {
        console.log("Please enter a valid number.");
    }
}

console.log("Congratulations, you guessed correct!!!");
