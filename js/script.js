//Create global variables to select the following elements
const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const messagesAppear = document.querySelector(".messages-appear");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia" ;

//write a function to add placeholders for each letter
const placeholder = function (word) {
	const placeholderLetters = [];
	for (const letter of word) {
		console.log(letter);
		placeholderLetters.push("●");
	}
	wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//add an event listener for the button
guessLetterButton.addEventListener("click", function (e) {
	e.preventDefault();
	const guess = letterInput.value;
	console.log(guess);
	letterInput.value = "";
});


