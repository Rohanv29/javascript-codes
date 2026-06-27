// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Selecting elements
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");

const guesses = document.querySelector("#guesses");
const remaining = document.querySelector("#remaining");
const message = document.querySelector("#message");

let previousGuesses = [];
let attempts = 10;

// Submit Button
submit.addEventListener("click", function () {

    const guess = Number(userInput.value);

    // Validation
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.innerHTML = "⚠ Please enter a number between 1 and 100";
        return;
    }

    // Store previous guesses
    previousGuesses.push(guess);

    guesses.innerHTML = previousGuesses.join(", ");

    attempts--;

    remaining.innerHTML = attempts;

    // Check answer
    if (guess === randomNumber) {

        message.innerHTML = "🎉 Congratulations! You guessed it.";

        submit.disabled = true;

        return;
    }

    if (guess < randomNumber) {

        message.innerHTML = "📉 Too Low!";

    } else {

        message.innerHTML = "📈 Too High!";
    }

    // Game Over
    if (attempts === 0) {

        message.innerHTML =
            `❌ Game Over! Correct Number was ${randomNumber}`;

        submit.disabled = true;
    }

    userInput.value = "";

    userInput.focus();

});