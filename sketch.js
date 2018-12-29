function setup() {
    var canvas = createCanvas(windowWidth, windowHeight * 0.8);

    canvas.parent('sketchHolder');

    // background(255, 0, 200);
}

function draw() {
	fill(rgba(0,255,0, 0.25));
	noStroke();
	ellipse(mouseX, mouseY, 200, 200);
}