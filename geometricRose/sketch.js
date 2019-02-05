var slider;
var cv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cv.position(x,y);
}

function setup() {
  cv = createCanvas(800, 800);
  centerCanvas();
  slider = createSlider(1,16,4,0.1);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  k = slider.value();
  background('#000');
  translate(width/2, height/2);

  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
  for(var a = 0; a < TWO_PI * 10; a+= 0.02) {
    var r = 50 * cos(k* a);
    var x = r*cos(a);
    var y = r*sin(a);
    vertex(x,y);
  }

  endShape();


  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
  for(var a = 0; a < TWO_PI * 10; a+= 0.02) {
    var r = 200 * cos(k* a);
    var x = r*cos(a);
    var y = r*sin(a);
    vertex(x,y);
  }

  endShape();


  beginShape();
  stroke(255);
  noFill();
  strokeWeight(2);
  for(var a = 0; a < TWO_PI * 10; a+= 0.02) {
    var r = 400 * cos(k* a);
    var x = r*cos(a);
    var y = r*sin(a);
    vertex(x,y);
  }
  endShape();
}
