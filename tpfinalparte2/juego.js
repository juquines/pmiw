//colision , pantallas , puntaje , tiempo, botones!!

class main {
  constructor () {
    this.conejos = [];
    for (let i = 0; i < 9; i++) {
      this.conejos.push(new conejos());
    }
    
    this.cuchillo = new cuchillo();
    this.pantalla = new fondo ();
    
    this.botonx = width/2-48 ;
    this.botony= 400 ;
    this.botonan= 100; 
    this.botonal= 50;
    
    this.botonjugar = new boton (this.botonx,this.botony,this.botonan,this.botonal,"jugar");
    this.botonreiniciar = new boton (this.botonx,this.botony,this.botonan,this.botonal,"reiniciar");
    this.botoncomenzar = new boton (this.botonx,height/2,this.botonan,this.botonal,"comenzar");
    
    this.estado = "portada" ;
    this.contadorConejos = 0;  // conejos matados
    this.tiempoRestante = 30;  // segundos
    this.contadorDeTiempo = 0;  // Contador para los segundos
    this.segundosPorFrame = 60; 
    
    
  }

  estados () {
    if (this.estado === "portada") {
      this.pantalla.mostrarPantalla(0);
      this.botoncomenzar.mostrar();
    } else if (this.estado === "inst") {
      this.pantalla.mostrarPantalla(1);
      this.botonjugar.mostrar();
    } else if (this.estado === "juego") {
      this.pantalla.mostrarPantalla(2);
      this.gameplay();
    } else if (this.estado === "ganar") {
      this.pantalla.mostrarPantalla(4);
      this.botonreiniciar.mostrar();
    } else if (this.estado === "perder") {
      this.pantalla.mostrarPantalla(3);
      this.botonreiniciar.mostrar();
    } else if (this.estado === "finalsecreto") {
      this.pantalla.mostrarPantalla(5);
      this.botonreiniciar.mostrar();
    }
  }
  
 cambios () {
   if (this.estado==="portada") {
      this.iniciarMusica();
     if(this.botoncomenzar.dondetoy()){
      this.estado = "inst";
     }
   }
   if (this.estado==="inst") {
     if(this.botonjugar.dondetoy()){
      this.estado = "juego";
     }
   }
   if (this.estado==="ganar" || this.estado === "perder" || this.estado === "finalsecreto") {
     if(this.botonreiniciar.dondetoy()){
       this.resetearJuego();
       this.estado = "portada";
       this.detenerMusica();
     }
   }
 }
  
  mostrar () {
    this.cuchillo.mostrar();

    for (let i = 0; i < this.conejos.length; i++) {
      this.conejos[i].mostrar();
    }
    push ();
    textSize(11);
    fill(255); 
    text("Conejos\nasesinados: " + this.contadorConejos, 540, 30);
    pop();
    
    push();
    textSize(14);
    fill(255); 
    text("Tiempo restante: " + this.tiempoRestante + "s", 486, 72);
    pop();
  }

  lanzarCuchillo () {
    this.cuchillo.seMueve();
  }

  detectarColisiones() { //choque con conejp
    for (let i = 0; i < this.conejos.length; i++) {
      if (!this.conejos[i].muere) {
        if (
          this.cuchillo.x + this.cuchillo.an > this.conejos[i].x && 
          this.cuchillo.x < this.conejos[i].x + this.conejos[i].an &&
          this.cuchillo.y + this.cuchillo.al > this.conejos[i].y &&
          this.cuchillo.y < this.conejos[i].y + this.conejos[i].al
          ) {
          this.conejos[i].morir();
          this.contadorConejos++;
        }
      }
    }
  }

actualizarTiempo() {
    this.contadorDeTiempo++;
 //cuando se llega al valpr que indica q paso un seg se reinicia y resta
    if (this.contadorDeTiempo >= this.segundosPorFrame) {
      this.contadorDeTiempo = 0; 
      this.tiempoRestante--; 

      if (this.tiempoRestante <= 0) {
        if (this.contadorConejos >= 9) {
          this.estado = "ganar";  // 9/9
        } else if (this.contadorConejos === 0) {
          this.estado = "finalsecreto";  // 0/9
        } else {
          this.estado = "perder";  // 1-8/9
        }
    }
  }
}
  
  gameplay() {
    this.actualizarTiempo();
    for (let i = 0; i < this.conejos.length; i++) {
      this.conejos[i].moviendo();
    }

    this.cuchillo.moviendo();
    this.detectarColisiones();
    this.mostrar();
    
    if (this.contadorConejos >= 9 && this.tiempoRestante > 0) {
      this.estado = "ganar";  
    }
  }
  
  resetearJuego() {
  this.contadorConejos = 0;
  this.tiempoRestante = 30;
  this.contadorDeTiempo = 0;

  this.cuchillo.y = this.cuchillo.y ; 
  for (let conejo of this.conejos) {
    conejo.respawnear();
  }
}

iniciarMusica() {
    if (!musik.isPlaying()) {
      musik.loop(); 
    }
  }
  detenerMusica() {
    musik.stop();
  }
}
