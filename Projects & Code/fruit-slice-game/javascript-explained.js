// Declare initial game state variables
var playing = false; // Boolean to track if the game is active
var score; // Variable to hold the player's score
var trialsLeft; // Number of lives or chances left for the player
var step; // Speed at which the fruit falls
var interval; // Interval ID for controlling fruit movement

// Array containing names of different fruits
var fruits = [
	"apple",
	"banana",
	"blueberry",
	"cherry",
	"grapes",
	"kiwi",
	"lemon",
	"mango",
	"orange",
	"peach",
	"pear",
	"strawberry",
	"watermelon",
];

// jQuery function to ensure code runs after the document is ready
$(function () {
	// Event listener for the start/reset button click
	$("#start-reset").click(function () {
		// Check if the game is already in play
		if (playing == true) {
			// If playing, reload the page to reset the game
			location.reload();
		} else {
			// If not playing, start a new game
			playing = true; // Set playing status to true
			score = 0; // Initialize score to 0
			$("#score-value").html(score); // Display initial score

			$("#trials-left").show(); // Show the trials (lives) left container
			trialsLeft = 3; // Set initial lives to 3
			addHearts(); // Display the initial hearts

			$("#game-over").hide(); // Hide the game over message if visible

			$("#start-reset").html("Reset Game"); // Update button text to "Reset Game"

			game(); // Start the game
		}
	});

	// Event listener for mouseover (slice action) on the fruit
	$("#fruit").mouseover(function () {
		score++; // Increase the score by 1
		$("#score-value").html(score); // Update the score display
		$("#slice-sound")[0].play(); // Play the slice sound effect
		clearInterval(interval); // Stop fruit movement
		$("#fruit").hide("explode", 500); // Hide the fruit with explosion effect
		setTimeout(game, 800); // Restart the game after a short delay
	});

	// Function to display hearts based on the number of trials left
	function addHearts() {
		$("#trials-left").empty(); // Clear existing hearts
		for (let i = 0; i < trialsLeft; i++) {
			// Add a heart for each remaining trial
			$("#trials-left").append(" ❤️");
		}
	}

	// Main game logic function to control fruit falling
	function game() {
		$("#fruit").show(); // Show the fruit
		chooseFruit(); // Randomly select a fruit image
		$("#fruit").css({ left: Math.round(Math.random() * 550), top: -90 }); // Position fruit at a random x-coordinate at the top of the container

		step = Math.round(Math.random() * 5) + 1; // Set a random fall speed (step)
		interval = setInterval(function () {
			// Start fruit falling interval
			$("#fruit").css("top", $("#fruit").position().top + step); // Move fruit down by step amount

			// Check if the fruit has fallen below the container
			if ($("#fruit").position().top > $("#fruit-container").height()) {
				if (trialsLeft > 1) {
					// If the player still has lives left
					$("#fruit").show(); // Show a new fruit
					chooseFruit(); // Select a new fruit image
					$("#fruit").css({ left: Math.round(Math.random() * 550), top: -90 }); // Reset position
					step = Math.round(Math.random() * 5) + 1; // Set a new fall speed
					trialsLeft--; // Decrease the number of lives
					addHearts(); // Update the hearts display
				} else {
					// End the game if no lives left
					playing = false; // Set playing status to false
					$("#start-reset").html("Start Game"); // Update button text
					$("#game-over").show(); // Show game over message
					$("#game-over").html(
						"<p>Game Over!</p><p>Your score is " + score + ".</p>"
					); // Display final score
					$("#trials-left").hide(); // Hide trials left
					stopInterval(); // Stop the fruit movement
				}
			}
		}, 10); // Repeat every 10ms for smooth falling effect
	}

	// Function to select a random fruit image for display
	function chooseFruit() {
		$("#fruit").attr(
			"src",
			"assets/images/" +
				fruits[Math.floor(Math.random() * fruits.length)] +
				".png"
		); // Set fruit image source to a random fruit from the array
	}

	// Function to stop the fruit movement interval and hide the fruit
	function stopInterval() {
		clearInterval(interval); // Clear the movement interval
		$("#fruit").hide(); // Hide the fruit
	}
});
