"use strict";

setInterval(colorChange, 2000);
let shape = document.getElementById("shape");
let i = 0;
shape.className = "c" + i;
function colorChange() {
	i++;
	if (i === 6) {
		i = 0;
	}
	shape.className = "c" + i;
}