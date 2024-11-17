//se dibuja, se mueve

class cuchillo {
  constructor () {
    this.x = width/2;
    this.y = 410 ;
    this.an = 15 ;
    this.al = 70;
    this.velocidad = 100;
    this.mover = false ;
    this.imagen = loadImage("data/cuchillo.png");
  }
  
  mostrar() {
      image(this.imagen, this.x, this.y, this.an, this.al);
  }

  moviendo () {
    if (this.mover) {
      this.y -=this.velocidad;        
     if (this.y + this.al < 0) {
      this.mover = false;
      this.y = 410;
    }
    }
  } 
  
  seMueve() {
    if (!this.mover) {
    this.mover = true;
  }
}
  
  respawnear() {
    this.mostrar();  
    this.moviendo();
  }
}
