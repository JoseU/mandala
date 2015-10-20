

function Caleido(_escala, _color, _behavior) {
  this.escala = _escala;
  this.c = _color;
  this.behavior = _behavior;
  this.linea = new Linea(this.escala, this.c, this.behavior);
  this.div = random(1) < 0.6 ? 7:14;
}


Caleido.prototype.update = function() {
  var angulo = 360 / this.div;
  push();
  for (var i = 0; i < this.div; i++) {
    rotate(radians(angulo));
    this.linea.test();
    this.linea.upDate();
    this.linea.dibujar();
    scale(-1, 1);
    this.linea.dibujar();
    scale(-1, 1);
  }
  pop();
}

Caleido.prototype.rezise = function(_escala) {
  this.escala = _escala;
  this.linea.resize(this.escala);
}
