/**
The MIT License (MIT)

Copyright (c) 2014 Kirill Danilov <broderix@yandex.ru>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var iso = {}, 
	backgroundColor = 0, 
	canvas = {},
	onTimeIntervalListener = function() {}, 
	onBackgroundIntervalListener = function() {}, 
	onVisibilityChangeListener = function() {}, 
	onScreenStateChangeListener = function() {}, 
	timeInterval = 0, 
	backgroundInterval = 0, 
	number = {}, 
	Point = {}, 
	Path = {}, 
	Shape = {}, 
	Color = {},
	intervalsRegistered = false;

var clearIntervals = function() {
	clearInterval(timeInterval);
	clearInterval(backgroundInterval);
};

var startIntervals = function() {
	intervalsRegistered = true;
	onTimeIntervalListener();
	onBackgroundIntervalListener();
	timeInterval = setInterval(onTimeIntervalListener, 60 * 1000);
	backgroundInterval = setInterval(onBackgroundIntervalListener, 50);
};

onVisibilityChangeListener = function() {
	if (document.visibilityState === "visible" && !intervalsRegistered) {
		startIntervals();
	} else {
		clearIntervals();
	}
}

onScreenStateChangeListener = function(previousState, changedState) {
	if (changedState === "SCREEN_OFF" && intervalsRegistered) {
		clearIntervals();
	} else if (changedState === "SCREEN_NORMAL") {
		startIntervals();
	}
}

window.onload = function() {
	document.addEventListener('tizenhwkey', function(e) {
		if (e.keyName == "back")
			tizen.application.getCurrentApplication().exit();
	});
	canvas = document.getElementById("canvas");
	canvas.width = 320;
	canvas.height = 320;

	iso = new Isomer(canvas, { scale : 15 });
	Point = Isomer.Point;
	Path = Isomer.Path;
	Shape = Isomer.Shape;
	Color = Isomer.Color;

	onTimeIntervalListener();
	onBackgroundIntervalListener();
	document.addEventListener("visibilitychange", onVisibilityChangeListener);
	tizen.power.setScreenStateChangeListener(onScreenStateChangeListener);
};

number = function(n, x, y, color) {
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
	canvas.style.backgroundColor = "hsl(" + backgroundColor + ", 100%, 20%)";
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
	number(hours[0], 5, 11);
	number(hours[1], 5, 7);
	number(minutes[0], 5, 1);
	number(minutes[1], 5, -3);
	iso.add(Shape.Prism(new Point(5, 5, 3), 1, 1, 1));
	iso.add(Shape.Prism(new Point(5, 5, 1), 1, 1, 1));
}
