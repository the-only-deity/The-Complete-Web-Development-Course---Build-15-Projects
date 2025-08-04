$(function () {
	$("#slider").slider({
		min: 3,
		max: 30,
		slide: function (event, ui) {
			$("#circle").height(ui.value);
			$("#circle").width(ui.value);
		},
	});

	var paint = false;
	var paintErase = "paint";
	var canvas = document.getElementById("paintCanvas");
	var context = canvas.getContext("2d");
	var canvasContainer = $("#canvasContainer");

	var mouse = { x: 0, y: 0 };

	if (localStorage.getItem("imgCanvas") != null) {
		var img = new Image();
		img.onload = function () {
			context.drawImage(img, 0, 0);
		};

		img.src = localStorage.getItem("imgCanvas");
	}

	context.linewidth = 3;
	context.lineJoin = "round";
	context.lineCap = "round";

	canvasContainer.mousedown(function (i) {
		paint = true;
		context.beginPath();
		mouse.x = i.pageX - this.offsetLeft;
		mouse.y = i.pageY - this.offsetTop;
		context.moveTo(mouse.x, mouse.y);
	});

	canvasContainer.mousemove(function (i) {
		mouse.x = i.pageX - this.offsetLeft;
		mouse.y = i.pageY - this.offsetTop;
		if (paint == true) {
			if (paintErase == "paint") {
				context.strokeStyle = $("#paintColour").val();
			} else {
				context.strokeStyle = "white";
			}
			context.lineTo(mouse.x, mouse.y);
			context.stroke();
		}
	});

	canvasContainer.mouseup(function () {
		paint = false;
	});

	canvasContainer.mouseleave(function () {
		paint = false;
	});

	$("#reset").click(function () {
		context.clearRect(0, 0, canvas.width, canvas.height);
		paintErase = "paint";
		$("#erase").removeClass("eraseMode");
	});

	$("#save").click(function () {
		if (typeof localStorage != null) {
			localStorage.setItem("imgCanvas", canvas.toDataURL());
		} else {
			window.alert("Your browser does not support local storage!");
		}
	});

	$("#erase").click(function () {
		if (paintErase == "paint") {
			paintErase = "erase";
		} else {
			paintErase = "paint";
		}
		$(this).toggleClass("eraseMode");
	});

	$("#paintColour").change(function () {
		$("#circle").css("background-color", $(this).val());
	});

	$("#slider").slider({
		min: 3,
		max: 30,
		slide: function (event, ui) {
			$("#circle").height(ui.value);
			$("#circle").width(ui.value);
			context.lineWidth = ui.value;
		},
	});
});
