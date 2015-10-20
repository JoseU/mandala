function Linea(_escala, _color, _behavior) {
  this.escala = _escala;
  this.pos = createVector(random(1), random(1));
  this.pos.mult(this.escala - 50);
  this.sioNo = _behavior[6];

  this.tam = _behavior[5];
  this.tamMaximo = random(2, 10);
  this.vel = createVector(0, 0.1);

  this.t = _behavior[0];
  this.t2 = _behavior[1];

  this.rRot = _behavior[2]; //rango de rotación para cambiar la dirección;
  this.velT = _behavior[3]; // velosidad de cambio de dirección
  this.velT2 = _behavior[4]; // velosidad de cambio de tamaño
  this.c = _color;
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
  this.tam = map(noise(this.t2), 0, 1, 0.1, this.tamMaximo);
  this.pos.add(this.vel);
  this.t += this.velT;
  this.t2 += this.velT2;
}

Linea.prototype.dibujar = function() {
  noStroke();
  fill(this.c);
  ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
  if (this.sioNo) {
    noFill();
    stroke(0, 30);
    strokeWeight(this.tam / 8);
    ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
    stroke(hue(this.c), 50, 100, 5);
    strokeWeight(this.tam / 10);
    ellipse(this.pos.x, this.pos.y, this.tam * 5, this.tam/5)
  }
}

Linea.prototype.resize = function(_escala) {
  this.pos.div(this.escala);
  this.tam /= this.escala;
  this.escala = _escala; //cambio de escala
  this.pos.mult(this.escala);
  this.tam *= this.escala;
}