function Linea(_escala) {
  this.escala = _escala;
  this.pos = createVector(random(1), random(1));
  this.tam = random(1, this.escala / 50);
  this.tamMaximo = random(2, 10);
  this.vel = createVector(0,0.1);
  this.t = random(1);
  this.t2 = random(2);
  this.pos.mult(this.escala - 50);
  this.rRot = random(0.05, 0.1); //rango de rotación para cambiar la dirección;
  this.velT = random(0.01, 0.0001); // velosidad de cambio de dirección
  this.velT2 = random(0.001, 0.01);// velosidad de cambio de tamaño
  this.colorinche = color(random(20, 80), random(50,255), 200, 50);
}

Linea.prototype.test = function() {
  if (this.pos.mag() >= this.escala) {
    this.pos.normalize()
    this.pos.mult(this.escala - 1);
    this.vel.mult(-1);
  }
}

Linea.prototype.upDate = function() {
  this.vel.rotate(map(noise(this.t), 0, 1, -this.rRot, this.rRot));
  this.tam = map(noise(this.t2), 0,1, 0.1, this.tamMaximo);
  this.pos.add(this.vel);
  this.t += this.velT;
  this.t2 += this.velT2;
}

Linea.prototype.dibujar = function() {
  noStroke();
  fill(this.colorinche);
  ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
  noFill();
  stroke(0,50);
  strokeWeight(this.tam / 8);
  ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
  stroke(red(this.colorinche) + 100, green(this.colorinche) + 100, blue(this.colorinche) + 50, 10);
  strokeWeight(this.tam / 10);
  ellipse(this.pos.x, this.pos.y, this.tam * 8, this.tam/2)
}

Linea.prototype.resize = function(_escala) {
  this.pos.div(this.escala);
  this.tam /= this.escala;
  this.escala = _escala; //cambio de escala
  this.pos.mult(this.escala);
  this.tam *= this.escala;
}