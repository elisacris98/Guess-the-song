
document.getElementById('submit-guess').addEventListener('click', checkGuess);

const correctSongTitle = "Despacito";

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const resultMessage = document.getElementById('result-message');

    if (userGuess.toLowerCase() === correctSongTitle.toLowerCase()) {
        resultMessage.textContent = "Correct! You guessed the song!";
    } else {
        resultMessage.textContent = "Oops! Try again.";
    }
}
