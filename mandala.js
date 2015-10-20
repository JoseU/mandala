var diametro;
var radio;
var origen;
var canvas;
var margen = 10;
var myCaleido = new Array(7);


function setup() {
  //frameRate(20);
  testSize();
  
  origen = createVector(windowWidth / 2 - diametro / 2, windowHeight / 2 - diametro / 2);
  canvas = createCanvas(diametro, diametro);
  canvas.position(origen.x, origen.y);
  background(0);
  translate(radio, radio);
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i] = new Caleido(radio);
  }

}

function draw() {
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i].update();
  }
}

function windowResized() {
  testSize();
  origen.x = windowWidth / 2 - diametro / 2;
  origen.y = windowHeight / 2 - diametro / 2;
  canvas.position(origen.x, origen.y);
  resizeCanvas(diametro, diametro);
  translate(radio, radio);
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i].rezise(radio);
  }
}

function testSize() {
  if (windowWidth >= windowHeight) {
    diametro = windowHeight - margen;
  } else {
    diametro = windowWidth - margen;
  }
  radio = diametro / 2;
}