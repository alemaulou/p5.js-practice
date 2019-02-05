var n = 0;
var c = 3;
var cv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cv.position(x,y);
}

function setup() {
  cv = createCanvas(800, 800);
  centerCanvas();
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function windowResized() {
  centerCanvas();
}

function draw() {

  // a = angle
  var a = n * 137.5;

  // r = radius
  var r = c * sqrt(n);


  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

  fill((2*a-r) % 255, 255, 255, 255);
  ellipse(x,y, 4, 4);


  n++;
}
