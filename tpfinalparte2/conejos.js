//se dibuja, se mueve, vive - muere

class conejos {
  constructor () {
    this.x = width-20;
    this.y = random(10, height - 120);
    this.an = 60;
    this.al= 60;
    this.velocidad = random (10, 15);
    this.muere = false;
    this.imagenes = [];

    for (let i=0; i<=2; i++) {
      this.imagenes[i] = loadImage("data/conejo"+i+".png");
    }
  }

  mostrar () {
    if (this.muere) {
      image(this.imagenes[1], this.x, this.y, this.an, this.al);
    } else {
      image(this.imagenes[0], this.x, this.y, this.an, this.al);
    }
  }

  moviendo() {
    if (!this.muere) {
      this.x += this.velocidad;
      if (this.x + this.an > width) {
        this.respawnear ();
      }
    }
  }
  respawnear() {
    this.x = -this.an;
    this.y = this.y;
    this.velocidad = this.velocidad;
    this.muere = false;
  }


  morir() {
    this.muere = true;
  }
}
