// Global variable: mouseIsPressed (Boolean)
// Methods:
// fill() - sets the color used to fill shapes. - (http://processingjs.org/reference/fill_/)


function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  // A global variable that represents whether the mouse is currently pressed. True if the mouse is being pressed, false otherwise.
  if(mouseIsPressed) {
    fill(204, 102, 0);
  } else {
    noFill();
  }
  ellipse(mouseX, mouseY, 80, 80);
}
