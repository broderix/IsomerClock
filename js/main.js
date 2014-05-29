
var iso = {},
	backgroundColor = 0,
	canvas = {},
	onTimeIntervalListener = function(){},
	onBackgroundIntervalListener = function(){},
	timeInterval,
	backgroundInterval;
	
var onVisibilityChangeListener = function() {
	console.log(document["hidden"], document.visibilityState);
	if (document.visibilityState === "visible") {
//		tizen.power.request("SCREEN", "SCREEN_NORMAL");
//		tizen.power.request("SCREEN", "CPU_AWAKE");
		onTimeIntervalListener();
		onBackgroundIntervalListener();
		timeInterval = setInterval(onTimeIntervalListener, 1000);
		backgroundInterval = setInterval(onBackgroundIntervalListener, 100);
	} else {
//		tizen.power.release("SCREEN");
		clearInterval(timeInterval);
		clearInterval(backgroundInterval);
	}
}

window.onload = function() {
	document.addEventListener('tizenhwkey', function(e) {
		if (e.keyName == "back")
			tizen.application.getCurrentApplication().exit();
	});
	// http://jdan.github.io/isomer/gallery/

	canvas = document.getElementById("canvas");
	canvas.width = 320;
	canvas.height = 320;

	iso = new Isomer(canvas, {
		scale : 15,
	});
	var Point = Isomer.Point;
	var Path = Isomer.Path;
	var Shape = Isomer.Shape;
	var Color = Isomer.Color;


//	var red = new Color(160, 60, 50);
//	var blue = new Color(50, 60, 160);
//	var gray = new Color(163, 163, 163);
	
	onTimeIntervalListener();
	onBackgroundIntervalListener();
	document.addEventListener("visibilitychange", onVisibilityChangeListener, false);
};

var number = function(n, x, y, color) {
	switch (parseInt(n)) {
	case 0:
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 0), 1, 1, 5), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 4), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 0), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 1, 5), color);
		break;
	case 1:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0)), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1)), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 2)), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 3)), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4)), color);
		break;
	case 2:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 1), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 2), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 3), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 3), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	case 3:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 2), 1, 2, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 3), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	case 4:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 2), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 3), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 1, 5), color);
		break;
	case 5:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1), 1, 1, 2), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 2), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 3), 1, 1, 2), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	case 6:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 1), 1, 1, 3), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1), 1, 1, 2), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 2), 1, 2, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	case 7:
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 0), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 1), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 2), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 3), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	case 8:
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 0), 1, 1, 5), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 4), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 2), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 1 + y, 0), 1, 1, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 1, 5), color);
		break;
	case 9:
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 0), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 2), 1, 3, 1), color);
		iso.add(Shape.Prism(new Point(0 + x, 2 + y, 3), 1, 1, 2), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 1), 1, 1, 3), color);
		iso.add(Shape.Prism(new Point(0 + x, 0 + y, 4), 1, 3, 1), color);
		break;
	}
}

onBackgroundIntervalListener = function() {
	backgroundColor = backgroundColor + 1;
	canvas.style.backgroundColor = "hsl(" + color + ",100%,30%)";
	backgroundColor = (backgroundColor > 359) ? 0 : backgroundColor;
};

onTimeIntervalListener = function() {
	var d = new Date();
	var hours = d.getHours().toString();
	if (hours.length === 1) {
		hours = "0" + hours;
	}
	var minutes = d.getMinutes().toString();
	if (minutes.length === 1) {
		minutes = "0" + minutes;
	}
	iso.canvas.clear();
//	number(hours[0], -3, 4);
//	number(hours[1], -1, 1);
//	number(minutes[0], 2, -3);
//	number(minutes[1], 4, -6);
//	iso.add(Shape.Prism(new Point(0, 0, 3), 1, 1, 1));
//	iso.add(Shape.Prism(new Point(0, 0, 1), 1, 1, 1));
	
	iso.canvas.clear();
	number(hours[0], 5, 11);
	number(hours[1], 5, 7);
	number(minutes[0], 5, 1);
	number(minutes[1], 5, -3);
	iso.add(Shape.Prism(new Point(5, 5, 3), 1, 1, 1));
	iso.add(Shape.Prism(new Point(5, 5, 1), 1, 1, 1));
}
