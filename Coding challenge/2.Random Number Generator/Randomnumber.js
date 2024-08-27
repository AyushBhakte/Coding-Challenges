// Delay in seconds (modifiable)
let delayInSeconds = 3;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to display countdown and generate random number after delay
function countdownAndGenerateNumber() {
    let countdown = delayInSeconds;

    // Display countdown message every second
    let countdownInterval = setInterval(() => {
        console.log(`Time remaining: ${countdown} second(s)`);
        countdown--;

        // Stop the countdown when it reaches 0
        if (countdown < 0) {
            clearInterval(countdownInterval);

            // Generate and display the random number
            const randomNumber = generateRandomNumber();
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

// Start the countdown and random number generation
countdownAndGenerateNumber();
