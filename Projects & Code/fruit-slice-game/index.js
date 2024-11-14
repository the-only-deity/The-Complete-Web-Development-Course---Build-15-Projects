var playing = false;
var score;
var trialsLeft;
var step;
var interval;
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

$(function () {
	$("#start-reset").click(function () {
		if (playing == true) {
			location.reload();
		} else {
			playing = true;

			score = 0;
			$("#score-value").html(score);

			$("#trials-left").show();
			trialsLeft = 3;
			addHearts();

			$("#game-over").hide();

			$("#start-reset").html("Reset Game");

			game();
		}
	});

	$("#fruit").mouseover(function () {
		score++;
		$("#score-value").html(score);
		$("#slice-sound")[0].play();
		clearInterval(interval);
		$("#fruit").hide("explode", 500);
		setTimeout(game, 800);
	});

	function addHearts() {
		$("#trials-left").empty();
		for (let i = 0; i < trialsLeft; i++) {
			$("#trials-left").append(" ❤️");
		}
	}

	function game() {
		$("#fruit").show();
		chooseFruit();
		$("#fruit").css({ left: Math.round(Math.random() * 550), top: -90 });

		step = Math.round(Math.random() * 5) + 1;
		interval = setInterval(function () {
			$("#fruit").css("top", $("#fruit").position().top + step);

			if ($("#fruit").position().top > $("#fruit-container").height()) {
				if (trialsLeft > 1) {
					$("#fruit").show();
					chooseFruit();
					$("#fruit").css({ left: Math.round(Math.random() * 550), top: -90 });

					step = Math.round(Math.random() * 10) + 1;
					trialsLeft--;
					addHearts();
				} else {
					playing = false;
					$("#start-reset").html("Start Game");
					$("#game-over").show();
					$("#game-over").html(
						"<p>Game Over!</p><p>Your score is " + score + ".</p>"
					);
					$("#trials-left").hide();
					stopInterval();
				}
			}
		}, 10);
	}

	function chooseFruit() {
		$("#fruit").attr(
			"src",
			"assets/images/" +
				fruits[Math.floor(Math.random() * fruits.length)] +
				".png"
		);
	}

	function stopInterval() {
		clearInterval(interval);
		$("#fruit").hide();
	}
});
