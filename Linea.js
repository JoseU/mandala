function Linea(_escala, _color, _behavior) {
  this.escala = _escala;
  this.pos = createVector(random(this.escala/2), random(this.escala/2));
  this.sioNo = _behavior[6];

  this.tam;
  this.tamMaximo = _behavior[5];
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
    this.pos.mult(this.escala);
    this.vel.mult(-1);
  }
}

Linea.prototype.upDate = function() {
   this.tam = map(noise(this.t2), 0, 1, 0.1, this.tamMaximo);
   this.vel.rotate(map(noise(this.t), 0, 1, -this.rRot, this.rRot));
  this.pos.add(this.vel);
  this.t += this.velT;
  this.t2 += this.velT2;
}

Linea.prototype.dibujar = function() {


  if (this.sioNo) {
     noStroke();
     fill(this.c);
     ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
    noFill();
    stroke(0, 20);
    strokeWeight(this.tam / 3);
    ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
    stroke(hue(this.c), 50, 100, 3);
    strokeWeight(this.tam / 7);
    ellipse(this.pos.x, this.pos.y, this.tam * 10, this.tam/3);
}else{
   noStroke();
   fill(hue(this.c), saturation(this.c), 100, 10);
   ellipse(this.pos.x, this.pos.y, this.tam, this.tam);
}
}

Linea.prototype.resize = function(_escala) {
  this.pos.div(this.escala);
  this.tam /= this.escala;
  this.vel.div(this.escala);

  this.escala = _escala; //cambio de escala
  this.pos.mult(this.escala);
  this.tam *= this.escala;
  this.vel.mul(this.escala);

}
