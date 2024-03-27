let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const remainingGuesses = document.querySelector('.remainingGuesses');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// Create the reset button initially
resetButton = document.createElement('button');
resetButton.textContent = 'Start new game';
document.body.append(resetButton);
resetButton.classList.add("resetButton");

guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right! 🏆';
        lastResult.style.backgroundColor = 'green';
        lastResult.classList.add("right");
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 7) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.classList.add("wrong");
        if(userGuess < randomNumber) {
            if (randomNumber % 2 === 0) {
                lowOrHi.textContent = 'Last guess was too low and required number is an even number';
            } else {
                lowOrHi.textContent = 'Last guess was too low and required number is an odd number';
            }
        } else if(userGuess > randomNumber) {
            if (randomNumber % 2 === 0) {
                lowOrHi.textContent = 'Last guess was too high and required number is an even number';
            } else {
                lowOrHi.textContent = 'Last guess was too high and required number is an odd number';
            }
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
    updateRemainingGuesses(); // Update the remaining guesses
}

guessSubmit.addEventListener('click', checkGuess);

// Add event listener for reset button
resetButton.addEventListener('click', resetGame);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

// Reset the Game to normal
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.textContent = '';
    lastResult.style.backgroundColor = '';

    remainingGuesses.textContent = 'Remaining guesses: 7'; // Reset remaining guesses
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function updateRemainingGuesses() {
    let remaining = 7 - guessCount + 1; // Plus 1 because guessCount starts at 1
    remainingGuesses.textContent = 'Remaining guesses: ' + remaining;
}
