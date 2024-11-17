class fondo {
  constructor () {
    this.x = 0;
    this.y = 0;
    this.an = width ;
    this.al = height;
    this.fondos = [];

    for (let i=0; i<=6; i++) {
      this.fondos[i] = loadImage("data/pantalla"+i+".png");
    }
  }

  mostrarPantalla(index) {
    image(this.fondos[index], this.x, this.y, this.an, this.al);
  }
}
  
  
 
