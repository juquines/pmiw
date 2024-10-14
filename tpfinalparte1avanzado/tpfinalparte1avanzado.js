//juiana quines streisys, agostina milla
//la foto de inicio no es la que quedaria jejej


let txt = [];
let escena = [];
let acto;

const boton1x = 100;
const boton1y = 400;
const boton2x = 440;
const boton2y = 400;
const botonladoder = 640 - 40; //derecho
const botonladoizq = 40; //izquierdo
const botonladoradio = 25;

const botonan = 100; 
const botonal = 50; 

const posicionytxt = 25;
const posicionxtxt = 50;
const bloquetxt = 550;

function preload() {
  txt = loadStrings("data/causp.txt");
  for (let i = 0; i < 14; i++) {
    escena[i] = loadImage("data/escena" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 14; i++) {
    escena[i].resize(640, 480);
  }
  acto = "primera";
}

function draw() {
  background(0); 
  
  if (acto === "primera") {
    pantalla(escena[0], 0, 0, width, height);
    boton(boton1x, boton1y, botonan, botonal); // creditos
    boton(boton2x, boton2y, botonan, botonal); // 1
  } 
  else if (acto === "segunda") {
    pantalla(escena[1], 0, 0, width, height);
    posicionarTexto(txt[0], posicionxtxt, posicionytxt, bloquetxt);
    botonlado(width - 40, height / 2, botonladoradio); // 2
  }
  else if (acto === "tercera") {
    pantalla(escena[2], 0, 0, width, height); 
    posicionarTexto(txt[1], posicionxtxt, posicionytxt, bloquetxt); 
    boton(boton1x, boton1y, botonan, botonal); // 9
    boton(boton2x, boton2y, botonan, botonal); // 4
  }
  else if (acto === "cuarta") {
    pantalla(escena[3], 0, 0, width, height);
    posicionarTexto(txt[2], posicionxtxt, posicionytxt, bloquetxt);
    botonlado(width - 40, height / 2, botonladoradio); // 5
    botonlado(40, height / 2, botonladoradio); // 3
  }
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
    if (dondetoy(width - 40 - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "tercera"; 
    }
  }
  if (acto === "tercera") {
    if (dondetoy(boton1x, boton1y, botonan, botonal)) { 
      acto = "novena"; 
    } else if (dondetoy(boton2x, boton2y, botonan, botonal)) { 
      acto = "cuarta";
    }
  } 
  if (acto === "cuarta") {
    if (dondetoy(width - 40 - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "quinta";
    } else if (dondetoy(botonladoizq - botonladoradio, height / 2 - botonladoradio, botonladoradio * 2, botonladoradio * 2)) { 
      acto = "tercera";
    }
  }
}

function boton(x, y, an, al) {
  if (dondetoy(x, y, an, al)) {
    fill(212, 160, 23);
  } else {
    fill(107, 107, 107);
  }
  rect(x, y, an, al);
}

function botonlado(x, y, radio) {
  if (dondetoy(x - radio, y - radio, radio * 2, radio * 2)) {
    fill(255, 255, 255, 70);
  } else {
    fill(255, 255, 255, 150);
  }
   
  ellipse(x, y, radio * 2, radio * 2); 
}

function dondetoy(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function pantalla(foto, x, y, ancho, alto, donde) {
  imageMode(donde);
  image(foto, x, y, ancho, alto);
}

function posicionarTexto(texto, x, y, a) {
  fill(255); 
  textAlign(LEFT); 
  textSize(20); 
  text(texto, x, y, a); 
}
