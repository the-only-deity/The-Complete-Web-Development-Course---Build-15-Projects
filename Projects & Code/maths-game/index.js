var gameOn = false;
var score = 0;
var time = 60;
var countdownInterval;
var correctAnswer;

document.getElementById("start-reset").onclick = function () {
	if (gameOn) {
		window.location.reload();
	} else {
		document.getElementById("start-reset").innerHTML = "Reset Game";
		gameOn = true;
		startGame();
	}
};

function startGame() {
	if (gameOn) {
		document.getElementById("score-value").innerHTML = score;
		document.getElementById("time-remaining").style.display = "block";

		var firstMultiple = Math.round(Math.random() * 9) + 2;
		var secondMultiple = Math.round(Math.random() * 9) + 2;

		document.getElementById("question").innerHTML =
			firstMultiple + " X " + secondMultiple;

		correctAnswer = firstMultiple * secondMultiple;

		let answers = new Set();
		while (answers.size < 3) {
			let randomAnswer = Math.round(Math.random() * 100);
			if (randomAnswer !== correctAnswer) {
				answers.add(randomAnswer);
			}
		}

		answers = Array.from(answers);
		answers.push(correctAnswer);

		function getRandomElement(arr) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			return arr.splice(randomIndex, 1)[0];
		}

		for (let i = 1; i <= 4; i++) {
			document.getElementById("box" + i).innerHTML = getRandomElement(answers);

			document.getElementById("box" + i).onclick = function () {
				checkAnswer(this.innerHTML);
			};
		}

		startCountdown();
	}
}

function checkAnswer(answer) {
	if (answer == correctAnswer) {
		score++;
		document.getElementById("score-value").innerHTML = score;
		document.getElementById("correct").style.display = "block";

		setTimeout(function () {
			document.getElementById("correct").style.display = "none";
		}, 1000);

		startGame();
	} else {
		document.getElementById("incorrect").style.display = "block";

		setTimeout(function () {
			document.getElementById("incorrect").style.display = "none";
		}, 1000);
	}
}

function startCountdown() {
	clearInterval(countdownInterval);
	document.getElementById("time").innerHTML = time;
	countdownInterval = setInterval(countDown, 1000);
}

function countDown() {
	if (time > 0) {
		time--;
		document.getElementById("time").innerHTML = time;
	} else {
		clearInterval(countdownInterval);
		gameOver();
	}
}

function gameOver() {
	clearInterval(countdownInterval);
	document.getElementById("start-reset").innerHTML = "Start Game";
	document.getElementById("game-over").innerHTML =
		"<p>Game Over!</p><p>Your score is " + score + "</p>";
	document.getElementById("game-over").style.display = "block";
	document.getElementById("time-remaining").style.display = "none";
	document.getElementById("question").innerHTML = "";
	for (let i = 1; i <= 4; i++) {
		let box = document.getElementById("box" + i);
		box.innerHTML = "";
		box.onclick = null;
	}
	reloadGame();
}

function reloadGame() {
	clearInterval(countdownInterval);
	document.getElementById("start-reset").onclick = function () {
		document.getElementById("game-over").style.display = "none";
		score = 0;
		time = 60;
		startGame();
	};
}
