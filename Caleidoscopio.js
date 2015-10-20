function Caleido(_escala) {
  this.escala = _escala;
  this.linea = new Linea(this.escala);
}


Caleido.prototype.update = function() {
  push();
  for (var i = 0; i < 7; i++) {
    rotate(radians(51.42));
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