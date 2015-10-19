var alto;
var origen;
var canvas;
var margen = 10;

function setup() {
  alto = windowHeight - margen;
  origen = createVector(windowWidth/2 - alto/2, windowHeight/2 - alto/2);
  canvas = createCanvas(alto, alto);
  canvas.position(origen.x,origen.y);
  background(255);
}

function draw() {
  
}

function windowResized() {
  alto = windowHeight - margen;
  origen.x = windowWidth/2 - alto/2;
  origen.y = windowHeight/2 - alto/2;
  canvas.position(origen.x,origen.y);
  resizeCanvas(alto, alto);
  background(255);
}