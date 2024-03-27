let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const remainingGuesses = document.querySelector('.remainingGuesses');
const timerDisplay = document.getElementById('timerDisplay');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let timer;

// Create the reset button initially
resetButton = document.createElement('button');
resetButton.textContent = 'Start new game';
document.body.append(resetButton);
resetButton.classList.add("resetButton");

guessField.focus();

function startTimer(duration, display) {
    let timer = duration;
    let minutes, seconds;

    function updateTimer() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            if (!gameWon) {
                lastResult.textContent = '!!!TIME UP!!!';
                setGameOver();
            }
        }
    }

    updateTimer(); // run immediately

    let timerInterval = setInterval(updateTimer, 1000);
}

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
        // Start the timer on the first guess
        startTimer(45, timerDisplay); // 45 seconds
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right! 🏆';
        lastResult.style.backgroundColor = 'green';
        lastResult.classList.add("right");
        lowOrHi.textContent = '';
        gameWon = true;
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
    gameWon = false;

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
