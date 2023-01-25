function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let gameOver = false;
    return function checkGuess(guess) {
        numGuesses++;
        if (gameOver) {
            return "The game is over, you already won!";
        }
        else if (guess === num) {
            gameOver = true;
            return `You win! You found ${num} in ${numGuesses} guesses.`;
            
        }
        else if (guess < num) {
            return `${guess} is too low!`;
        }
        else if (guess > num) {
            return `${guess} is too high!`;
        }
    }
}

module.exports = { guessingGame };
