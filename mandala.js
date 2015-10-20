var diametro;
var radio;
var origen;
var canvas;
var margen = 10;
var myCaleido = new Array(14);


function setup() {
  frameRate(30);
  testSize();
  colorMode(HSB, 100, 100, 100, 100);
  origen = createVector(windowWidth / 2 - diametro / 2, windowHeight / 2 - diametro / 2);
  canvas = createCanvas(diametro, diametro);
  canvas.position(origen.x, origen.y);
  background(0);
  translate(radio, radio);
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i] = new Caleido(radio, setColor(i), setBehavior(i));
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

function setColor(i) {
  var tono = map(noise(i), 0, 1, 50, 70);
  var sat = map(noise(i + 1), 0, 1, 30, 120)
  var lum = random(60,100);
  return color(tono, sat, 100, 10);
}

function setBehavior(i) {
  var params = new Array(7); //parámetros de comportamiento
  params[0] = map(noise(i), 0, 1, 0, 1);
  params[1] = map(noise(i), 0, 1, 1, 2);
  params[2] = random(0.001, 0.5); // rango de rotación
  params[3] = random(0.01, 0.0001); //velosidad de rotación
  params[4] = random(0.01, 0.001); // velosidad de tamaño
  params[5] = random(1, radio / 30)
  params[6] = noise(i) < 0.5 ? true : false;
  return params;
}