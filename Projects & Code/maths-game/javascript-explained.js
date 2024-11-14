// Variable to track whether the game is currently running
var gameOn = false;

// Player's score, initialized to 0
var score = 0;

// Game timer, initialized to 60 seconds
var time = 60;

// Variable to hold the countdown interval ID for clearing it later
var countdownInterval;

// Variable to store the correct answer for the current question
var correctAnswer;

// Event listener for the "start-reset" button
document.getElementById("start-reset").onclick = function () {
	// If the game is already on, reload the page to reset everything
	if (gameOn) {
		window.location.reload(); // Reloads the page to reset the game
	} else {
		// Change the button text to "Reset Game"
		document.getElementById("start-reset").innerHTML = "Reset Game";

		// Set the game status to true, indicating that the game is active
		gameOn = true;

		// Call the function to start the game
		startGame();
	}
};

// Function to start the game
function startGame() {
	// Check if the game is active
	if (gameOn) {
		// Display the player's current score (initially 0)
		document.getElementById("score-value").innerHTML = score;

		// Show the time remaining area on the screen
		document.getElementById("time-remaining").style.display = "block";

		// Generate two random numbers between 2 and 10 for the multiplication question
		var firstMultiple = Math.round(Math.random() * 9) + 2;
		var secondMultiple = Math.round(Math.random() * 9) + 2;

		// Display the multiplication question in the designated HTML element
		document.getElementById("question").innerHTML =
			firstMultiple + " X " + secondMultiple;

		// Calculate the correct answer
		correctAnswer = firstMultiple * secondMultiple;

		// Create a set to store three unique incorrect answers
		let answers = new Set();

		// Loop until we generate 3 incorrect answers
		while (answers.size < 3) {
			let randomAnswer = Math.round(Math.random() * 100);
			// Ensure the random answer is not the same as the correct answer
			if (randomAnswer !== correctAnswer) {
				answers.add(randomAnswer);
			}
		}

		// Convert the set of incorrect answers into an array
		answers = Array.from(answers);

		// Add the correct answer to the array of possible answers
		answers.push(correctAnswer);

		// Function to randomly select and remove an element from the answers array
		function getRandomElement(arr) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			return arr.splice(randomIndex, 1)[0]; // Remove and return a random element
		}

		// Loop to assign random answers to the 4 answer boxes (box1 to box4)
		for (let i = 1; i <= 4; i++) {
			document.getElementById("box" + i).innerHTML = getRandomElement(answers);

			// Add a click event listener to each answer box to check if the selected answer is correct
			document.getElementById("box" + i).onclick = function () {
				checkAnswer(this.innerHTML); // Pass the box's value to checkAnswer()
			};
		}

		// Start the countdown timer for the game
		startCountdown();
	}
}

// Function to check if the clicked answer is correct
function checkAnswer(answer) {
	// If the selected answer matches the correct answer
	if (answer == correctAnswer) {
		// Increase the score and update the score display
		score++;
		document.getElementById("score-value").innerHTML = score;

		// Show the "correct" message for 1 second
		document.getElementById("correct").style.display = "block";
		setTimeout(function () {
			document.getElementById("correct").style.display = "none";
		}, 1000);

		// Restart the game with a new question
		startGame();
	} else {
		// Show the "incorrect" message for 1 second
		document.getElementById("incorrect").style.display = "block";
		setTimeout(function () {
			document.getElementById("incorrect").style.display = "none";
		}, 1000);
	}
}

// Function to start the countdown timer
function startCountdown() {
	// Clear any existing interval to avoid multiple timers running simultaneously
	clearInterval(countdownInterval);

	// Display the remaining time (initially 60 seconds)
	document.getElementById("time").innerHTML = time;

	// Set a new interval to run the countDown function every second (1000 ms)
	countdownInterval = setInterval(countDown, 1000);
}

// Function to decrement the countdown and handle the timer reaching zero
function countDown() {
	// If there is still time remaining, decrease the time by 1 second
	if (time > 0) {
		time--;
		document.getElementById("time").innerHTML = time; // Update the display
	} else {
		// If time runs out, stop the timer and end the game
		clearInterval(countdownInterval);
		gameOver(); // Call the gameOver function to handle the end of the game
	}
}

// Function to handle game over when time runs out
function gameOver() {
	// Stop the countdown timer
	clearInterval(countdownInterval);

	// Reset the "start-reset" button text to "Start Game"
	document.getElementById("start-reset").innerHTML = "Start Game";

	// Display the "Game Over" message and the player's final score
	document.getElementById("game-over").innerHTML =
		"<p>Game Over!</p><p>Your score is " + score + "</p>";
	document.getElementById("game-over").style.display = "block";

	// Hide the time remaining section
	document.getElementById("time-remaining").style.display = "none";

	// Clear the question and answer boxes
	document.getElementById("question").innerHTML = "";
	for (let i = 1; i <= 4; i++) {
		let box = document.getElementById("box" + i);
		box.innerHTML = ""; // Clear the answer box text
		box.onclick = null; // Remove the click event listeners
	}

	// Allow the player to reload the game
	reloadGame();
}

// Function to reset and reload the game when the player clicks "Start Game" again
function reloadGame() {
	// Clear any active countdown intervals
	clearInterval(countdownInterval);

	// Add a click event listener to the "start-reset" button
	document.getElementById("start-reset").onclick = function () {
		// Hide the "Game Over" message
		document.getElementById("game-over").style.display = "none";

		// Reset the score and time to their initial values
		score = 0;
		time = 60;

		// Restart the game
		startGame();
	};
}
