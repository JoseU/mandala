var diametro;
var canvas;
var margen = 10;
var myCaleido = new Array(20);
var paleta ;


function setup() {
  frameRate(30);
  testSize();
  colorMode(HSB, 100, 100, 100, 100);
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  translate(windowWidth / 2, windowHeight/2);
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i] = new Caleido(diametro, setColor(i), setBehavior(i));
  }
}

function draw() {
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i].update();
  }
}

function windowResized() {
  testSize();
  resizeCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  for (var i = 0; i < myCaleido.length; i++) {
    myCaleido[i].rezise(diametro);
  }
}

function testSize() {
  if (windowWidth >= windowHeight) {
    diametro = windowHeight;
  } else {
    diametro = windowWidth;
  }
  paleta = random(85);
}

function setColor(i) {
  var tono = random(paleta, paleta + 20);
  console.log(tono);
  var sat = map(noise(i + 1), 0, 1, 30, 120)
  var lum = random(60,100);
  return color(tono, sat, 100, 30);
}

function setBehavior(i) {
  var params = new Array(7); //parámetros de comportamiento
  params[0] = random(10);
  params[1] = random(10);
  params[2] = random(0.00001, 0.1); // rango de rotación
  params[3] = random(0.001, 0.00001); //velosidad de rotación
  params[4] = random(0.01, 0.00001); // velosidad de tamaño
  params[5] = random(1, diametro / 35)
  params[6] = random(1) < 0.7 ? true : false;
  return params;
}
