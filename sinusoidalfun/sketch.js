// Distance between each horizontal location.
let xspacing = 16;

// Width of entire wave
let w;

// Start angle at 0
let theta = 0.0;

// Height of wave
let amplitude = 75.0;

// How many pixels before wave repeats
let period = 500.0;

// value for incrementing x
let dx;

// using an array to store height values for the wave
let yvalues;
let yvalues2;

function setup() {
  createCanvas(1400, 1000);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  yvalues2 = new Array(floor(w / xspacing));
}

function draw() {
  background('#white');
  calcWave();
  calcWave2();
  renderWave();
  renderWave2();
}


// Increment theta (try different values for 'angular velocity' here)
function calcWave() {
  theta += .0002;

  // for every x value, calculate a y value with the sine function
  let x = theta;
  for(let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill('red');
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}

// Increment theta (try different values for 'angular velocity' here)
function calcWave2() {
  theta += .02;

  // for every x value, calculate a y value with the sine function
  let x = theta;
  for(let i = 0; i < yvalues.length; i++) {
    yvalues2[i] = cos(x) * amplitude;
    x += dx;
  }
}

function renderWave2() {
  noStroke();
  fill('#fae');
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues2[x], 16, 16);
  }
}
