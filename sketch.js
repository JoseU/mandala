var radio;
var origen;
var canvas;
var margen = 10;

function setup() {
  testSize();
  origen = createVector(windowWidth / 2 - radio / 2, windowHeight / 2 - radio / 2);
  canvas = createCanvas(radio, radio);
  canvas.position(origen.x, origen.y);
  background(255);
}

function draw() {

}

function windowResized() {
  testSize();
  origen.x = windowWidth / 2 - radio / 2;
  origen.y = windowHeight / 2 - radio / 2;
  canvas.position(origen.x, origen.y);
  resizeCanvas(radio, radio);
  background(255);
}


function testSize(){
  if (windowWidth >= windowHeight) {
    radio = windowHeight - margen;
  } else {
    radio = windowWidth - margen;
  }
}