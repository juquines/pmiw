// tp1 final parte1 - comisión 1
// juliana quines streisys - agostina milla
// https://youtu.be/vMb5YNZpfi0
// modificamos el diagrama agregando la pantalla d creditos y la conección a inicio con los finales

let txt = [];
let botontxt = [];
let escena = [];
let acto;
let musik;
let fuente;

const boton1x = 100;
const boton1y = 400;
const boton2x = 440;
const boton2y = 400;
const botonladoder = 640 - 40; //derecho
const botonladoizq = 40; //izquierdo
const botonladoradio = 25;

const botonan = 100; 
const botonal = 50; 

const posicionytxt = 28;
const posicionxtxt = 50;
const bloquetxt = 550;

function preload() {
  txt = loadStrings("data/causp.txt");
  botontxt = loadStrings("data/botones.txt");
  musik = loadSound("data/muddywaterinst.mp3");
  fuente = loadFont("data/causp.ttf");
  for (let i = 0; i < 16; i++) {
    escena[i] = loadImage("data/escena" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  for (let i = 0; i < 16; i++) {
    escena[i].resize(640, 480);
  }
  acto = "primera";
}

function draw() {
  background(0); 
  //console.log("Valor actual de acto:", acto);
  
  if (acto === "primera") {
    pantalla(escena[0], 0, 0, width, height);        
    boton(boton1x, boton1y, botonan, botonal); // creditos
    boton(boton2x, boton2y, botonan, botonal); // 2
    posicionarTextoboton(botontxt[0],boton1x, boton1y, botonan);
    posicionarTextoboton(botontxt[1],boton2x, boton2y, botonan);
    titulo(33,110);
  } 
  else if (acto === "segunda") {
    pantalla(escena[1], 0, 0, width, height);
    posicionarTexto(txt[0], posicionxtxt, posicionytxt, bloquetxt);
    botonlado(botonladoder, height / 2, botonladoradio); // 3
    botonlado(botonladoizq, height / 2, botonladoradio); // 1
  }
  else if (acto === "tercera") {
    pantalla(escena[2], 0, 0, width, height); 
    posicionarTexto(txt[1], posicionxtxt, posicionytxt, bloquetxt); 
    boton(boton1x, boton1y, botonan, botonal); // suelto
    boton(boton2x, boton2y, botonan, botonal); // cajon
    posicionarTextoboton(botontxt[2],boton1x, boton1y, botonan);
    posicionarTextoboton(botontxt[3],boton2x, boton2y, botonan);
    botonlado(botonladoizq, height / 2, botonladoradio); // 2
  }
  else if (acto === "cuarta") {
    pantalla(escena[3], 0, 0, width, height);
    posicionarTexto(txt[2], posicionxtxt, posicionytxt, bloquetxt);
    botonlado(botonladoder, height / 2, botonladoradio); // 5
    botonlado(botonladoizq, height / 2, botonladoradio); // 3
  }
  else if (acto === "quinta") {  
    pantalla(escena[4], 0, 0, width, height);
    posicionarTexto(txt[3], posicionxtxt, posicionytxt, bloquetxt);
    boton(boton1x, boton1y, botonan, botonal); // andree
    boton(boton2x, boton2y, botonan, botonal); // callar
    posicionarTextoboton(botontxt[5],boton1x, boton1y, botonan);
    posicionarTextoboton(botontxt[4],boton2x, boton2y, botonan);
    botonlado(botonladoizq, height / 2, botonladoradio); // 4
  }
   else if (acto === "sexta") {
    pantalla(escena[5], 0, 0, width, height);
    posicionarTexto(txt[4], posicionxtxt, posicionytxt, bloquetxt);    
    botonlado(botonladoizq, height / 2, botonladoradio); // 5
    botonlado(botonladoder, height / 2, botonladoradio); // 7
     }
     else if (acto === "septima") {
    pantalla(escena[6], 0, 0, width, height);
    posicionarTexto(txt[5], posicionxtxt, posicionytxt, bloquetxt);     
    boton(width/2 - 40, boton2y, botonan, botonal); // primera
    posicionarTextoboton(botontxt[8],width/2 - 40, boton1y, botonan);
     }
     else if (acto === "octava") {
    pantalla(escena[7], 0, 0, width, height);
    posicionarTexto(txt[7], posicionxtxt, posicionytxt, bloquetxt);    
    botonlado(botonladoizq, height / 2, botonladoradio); // 7
    botonlado(botonladoder, height / 2, botonladoradio); // 9
     }
     else if (acto === "novena") {
    pantalla(escena[8], 0, 0, width, height);
    posicionarTexto(txt[8], posicionxtxt, posicionytxt, bloquetxt);     
    boton(width/2 - 40, boton2y, botonan, botonal); // primera
    posicionarTextoboton(botontxt[8],width/2 - 40, boton1y, botonan);
     }
     else if (acto === "decima") {
    pantalla(escena[9], 0, 0, width, height);
    posicionarTexto(txt[10], posicionxtxt, posicionytxt, bloquetxt);    
    botonlado(botonladoizq, height / 2, botonladoradio); // 3
    botonlado(botonladoder, height / 2, botonladoradio); // 11
     }
     else if (acto === "undecima") {
    pantalla(escena[10], 0, 0, width, height);
    posicionarTexto(txt[11], posicionxtxt, posicionytxt, bloquetxt);    
    boton(boton1x, boton1y, botonan, botonal); // matar
    boton(boton2x, boton2y, botonan, botonal); // liberar
    posicionarTextoboton(botontxt[6],boton1x, boton1y, botonan);
    posicionarTextoboton(botontxt[7],boton2x, boton2y, botonan);
    botonlado(botonladoizq, height / 2, botonladoradio); // 10
     }
     else if (acto === "duodecima") {
    pantalla(escena[11], 0, 0, width, height);
    posicionarTexto(txt[12], posicionxtxt, posicionytxt, bloquetxt);    
    botonlado(botonladoizq, height / 2, botonladoradio); // 11
    botonlado(botonladoder, height / 2, botonladoradio); // 13
     }
     else if (acto === "decimotercera") {
    pantalla(escena[12], 0, 0, width, height);
    posicionarTexto(txt[13], posicionxtxt, posicionytxt, bloquetxt);        
    boton(width/2 - 40, boton2y, botonan, botonal); // primera
    posicionarTextoboton(botontxt[8],width/2 - 40, boton1y, botonan);
     }
     else if (acto === "decimocuarta") {
    pantalla(escena[13], 0, 0, width, height);
    posicionarTexto(txt[15], posicionxtxt, posicionytxt, bloquetxt);    
    botonlado(botonladoizq, height / 2, botonladoradio); // 11
    botonlado(botonladoder, height / 2, botonladoradio); // 15
     }
     else if (acto === "decimoquinta") {
    pantalla(escena[14], 0, 0, width, height);
    posicionarTexto(txt[16], posicionxtxt, posicionytxt, bloquetxt);        
    boton(width/2 - 40, boton2y, botonan, botonal); // primera
    posicionarTextoboton(botontxt[8],width/2 - 40, boton1y, botonan);
     }     else if (acto === "creditos") {
    pantalla(escena[15], 0, 0, width, height);
    push();
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text("CREDITOS: \n \nCuento : \nCarta a una Señorita en París - Julio Cortázar \n \nMúsica: \nMuddy Water - Stray Kids \n \nAlumnas \nJuliana Quines Streisys \nAgostina Milla",width/2,35);
    pop();
    botonlado(botonladoizq, height / 2, botonladoradio); // 1    
     }    
     boton(600,15, 30, 30); //musik
}
  
function mousePressed() {
  if (acto === "primera") {
    if (dondetoy(boton2x, boton2y, botonan, botonal)) { 
      acto = "segunda"; 
    } else if (dondetoy(boton1x, boton1y, botonan, botonal)) { 
      acto = "creditos";
    }
  }  
  if (acto === "segunda") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "tercera"; 
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "primera";
    }
  }
  if (acto === "tercera") {
    if (dondetoy(boton1x, boton1y, botonan, botonal)) { 
      acto = "decima"; 
    } else if (dondetoy(boton2x, boton2y, botonan, botonal)) { 
      acto = "cuarta";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "segunda";
    }
  } 
  if (acto === "cuarta") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "quinta";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "tercera";       
  }
  } 
  if (acto === "quinta") {
    if (dondetoy(boton2x, boton2y, botonan, botonal)) { 
      acto = "sexta"; 
    } else if (dondetoy(boton1x, boton1y, botonan, botonal)) { 
      acto = "octava";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "cuarta";
    }
}
if (acto === "sexta") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "septima";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "quinta";       
  }
  } 
  if (acto === "septima") {
    if (dondetoy(width/2 - 40, boton2y, botonan, botonal)) { 
      acto = "primera"; 
  } 
}
if (acto === "octava") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "novena";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "septima";       
  }
  } 
  if (acto === "novena") {
 if (dondetoy(width/2 - 40, boton2y, botonan, botonal)) { 
      acto = "primera"; 
  } 
}
if (acto === "decima") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "undecima";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "tercera";       
  }
  } 
  if (acto === "undecima") {
    if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "decima";
    } else if (dondetoy(boton1x, boton1y, botonan, botonal)) { 
      acto = "duodecima";
    } else if (dondetoy(boton2x, boton2y, botonan, botonal)) { 
      acto = "decimocuarta";
    }
  } 
  if (acto === "duodecima") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "decimotercera";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "undecima";       
  }
  } 
  if (acto === "decimotercera") {
    if (dondetoy(width/2 - 40, boton2y, botonan, botonal)) { 
      acto = "primera"; 
  } 
}
if (acto === "decimocuarta") {
    if (dondetoy(botonladoder - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "decimoquinta";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "undecima";       
  }
  } 
  if (acto === "decimoquinta") {
if (dondetoy(width/2 - 40, boton2y, botonan, botonal)) { 
      acto = "primera"; 
  } 
}
if (acto === "creditos") {
    if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "primera";       
  } 
}
 if (dondetoy(600, 15, 30, 30)) {
  if (musik.isPlaying()) {  
    musik.pause();  
  } else {  
    musik.play(); 
  }
}
}

function boton(x, y, an, al) {
  if (dondetoy(x, y, an, al)) {
    fill(210, 180, 140);
  } else {
    fill(77, 51, 25);
  }
  rect(x, y, an, al);
}

function botonlado(x, y, radio) {
  if (dondetoy(x - radio, y - radio, radio * 2, radio * 2)) {
    fill(255, 255, 255, 150);
  } else {
    fill(255, 255, 255, 65);
  }
     ellipse(x, y, radio * 2, radio * 2); 
}

function dondetoy(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function pantalla(foto, x, y, ancho, alto) {
  image(foto, x, y, ancho, alto);
}

function posicionarTexto(texto, x, y, a) {
  stroke(101, 67, 33);
  strokeWeight(3);
  textSize(20); 
  fill(255);
  text(texto, x, y, a); 
}

function posicionarTextoboton(texto, x, y, anchoBoton) {
  push();
  textAlign(CENTER, CENTER); 
  textSize(14); 
  fill(255); 
  text(texto, x + anchoBoton / 2, y + (botonal / 2)); 
  pop();
}

function titulo(x,y){
  stroke(101, 67, 33);
  textSize(40);
  fill(255);
  strokeWeight(4);
  text("Carta a una Señorita en París",x,y);
}
