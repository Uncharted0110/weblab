let wordList = ['FOX', 'CAT', 'DOG', 'BAT', 'HAT'];

let word = wordList[Math.floor(Math.random() * wordList.length)].split(''); // Split word into individual letters
let guessedLetters = new Array(word.length).fill('_'); 
let guessedWrongLetters = [];
let reward = 0;

function guessLetter(letter) {
    if (guessedWrongLetters.includes(letter) || guessedLetters.includes(letter)) {
        alert(`You already guessed "${letter}". Try a different letter.`);
        return;
    }

    let letterFound = false;
    let randomAmount = Math.floor(Math.random() * 100) + 1; 

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedLetters[i] = letter;
            letterFound = true;
        }
    }

    if (!letterFound) {
        guessedWrongLetters.push(letter);
        reward -= randomAmount;
    } else {
        reward += randomAmount; 
        alert(`You found a letter! Your current reward is $${reward}.`);
    }

    console.log(guessedLetters.join(' '));

    if (guessedLetters.join('') === word.join('')) {
        alert("Congratulations, you guessed the word!");
        alert(`Your final reward is $${reward}.`);
    }
}

function startGame() {
    alert("Welcome to the Word Guessing Game!");
    alert("Try to guess the word by entering one letter at a time.");
    alert("You have unlimited guesses until you guess the word correctly.");
    alert("Let's begin!");

    while (guessedLetters.join('') !== word.join('')) {
        let guess = prompt("Guess a letter:").toUpperCase();
        if (guess.length === 1 && /[A-Z]/.test(guess)) {
            guessLetter(guess);
        } else {
            alert("Please enter a valid letter.");
        }
    }
}

startGame();
