var x = 0;

function setup() {
  createCanvas(1200,500);
  background(300);
}

function draw() {
  ellipse(x, height/2, 300, 300);
  x = x + 5;
  fill(500, 100, 0);
}
