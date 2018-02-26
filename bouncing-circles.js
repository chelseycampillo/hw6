//the radius of the circle decreases every time the circle hits and edge of the canvas

var circles = [];
var counter = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(360), 60, 100, 0.6),
      r: 20
    }
  }
}

function draw() {
  background(0);
  noStroke();
  
  drawCounter();
  
  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

    // draw it
    //variables don't mean anything to the computer...
    //the only reason the variable "x" is denoted as the x coordinate is because you placed the x variable in the x location of the ellipse
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) { 
        circle.r -= 5
      	circle.xd = -circle.xd;
      	counter += 1;
      	//resets size of circle when it disappears
      	 if (circle.r === 1) {
      			circle.r = 20;
    			}
      
    }
    if (circle.y > height || circle.y < 0) {
      circle.r -= 5;
      circle.yd = -circle.yd;
      counter += 1;
    }
  }
}

function drawCounter() {
  fill(0,0,100);
  textSize(100);
  text(counter,125,225);
}
