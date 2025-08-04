$(function () {
	var mode = false;
	var timeCounter = 0;
	var lapCounter = 0;
	var action;
	var lapNumber = 0;
	var totalHours,
		totalMinutes,
		totalSeconds,
		totalCentiseconds,
		lapHours,
		lapMinutes,
		lapSeconds,
		lapCentiseconds;

	hideShowButtons("#startButton", "#lapButton");

	$("#startButton").click(function () {
		mode = true;
		hideShowButtons("#stopButton", "#lapButton");
		startAction();
	});

	$("#stopButton").click(function () {
		hideShowButtons("#resumeButton", "#resetButton");
		clearInterval(action);
	});

	$("#resumeButton").click(function () {
		hideShowButtons("#stopButton", "#lapButton");
		startAction();
	});

	$("#resetButton").click(function () {
		location.reload();
	});

	$("#lapButton").click(function () {
		if (mode) {
			clearInterval(action);
			addLap();
			lapCounter = 0; // Reset lap counter after storing lap time
			startAction();
		}
	});

	function hideShowButtons(x, y) {
		$(".buttons").hide();
		$(x).show();
		$(y).show();
	}

	function startAction() {
		action = setInterval(() => {
			timeCounter += 1; // Increments every 10ms (1 centisecond)
			lapCounter += 1;
			updateTime();
		}, 10);
	}

	function updateTime() {
		totalHours = Math.floor(timeCounter / 360000);
		totalMinutes = Math.floor((timeCounter % 360000) / 6000);
		totalSeconds = Math.floor(((timeCounter % 360000) % 6000) / 100);
		totalCentiseconds = ((timeCounter % 360000) % 6000) % 100;

		$("#hours").text(formatNumbers(totalHours));
		$("#minutes").text(formatNumbers(totalMinutes));
		$("#seconds").text(formatNumbers(totalSeconds));
		$("#centiseconds").text(formatCentiseconds(totalCentiseconds));

		lapHours = Math.floor(lapCounter / 360000);
		lapMinutes = Math.floor((lapCounter % 360000) / 6000);
		lapSeconds = Math.floor(((lapCounter % 360000) % 6000) / 100);
		lapCentiseconds = ((lapCounter % 360000) % 6000) % 100;

		$("#lapHours").text(formatNumbers(lapHours));
		$("#lapMinutes").text(formatNumbers(lapMinutes));
		$("#lapSeconds").text(formatNumbers(lapSeconds));
		$("#lapCentiseconds").text(formatCentiseconds(lapCentiseconds));
	}

	function formatNumbers(number) {
		return number < 10 ? "0" + number : number;
	}

	function formatCentiseconds(cs) {
		return cs < 10 ? "0" + cs : cs; // Ensure two-digit centiseconds
	}

	function addLap() {
		lapNumber++;
		var myLapDetails =
			"<div class='lap'><div class='lapNumber'>Lap " +
			lapNumber +
			"</div><div class='lapTime'><span>" +
			formatNumbers(lapHours) +
			":</span><span>" +
			formatNumbers(lapMinutes) +
			":</span><span>" +
			formatNumbers(lapSeconds) +
			":</span><span>" +
			formatCentiseconds(lapCentiseconds) +
			"</span></div></div>";
		$(myLapDetails).prependTo("#laps");
	}
});
