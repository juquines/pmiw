// tp1 juliana quines streisys
// comision 1
// https://youtu.be/KudQdB4xQ38

let foto;
let valor;

let ancho= 40;
let alto= 10;
let espaciadoy= 10;
let espaciadox= 40;
let iniciox= 480;
let inicioy= 80;

function preload(){
  foto = loadImage('data/tp3foto.png');
}

function setup() {
  createCanvas(800, 400);
  background (255) ;
  image(foto, 0, 0, 400, 400);
  valor=0;
}

function draw() {
  noStroke();
  
  //dibujo
  //ciclos for anidados
  for (let i=10; i<20; i++) {
    for (let j=0; j<40; j++) {
      bon(i, j);
      rect(i*espaciadox, j*espaciadoy, ancho, alto);
    }
  }
  for (let k=0; k<24; k++) {
    for (let l=0; l<6; l++) {
      bon(k, l);
      rect(k*espaciadoy+iniciox, l*espaciadox+inicioy, alto, ancho);
    }
  }
}

//colores
//funcion q no retorna
function bon (a, b) {

  //condicionales if/else

  if (valor==0) {

    if ((a+b)%2==0) {
      fill(0);
    } else {
      fill(255);
    }
  }
  else if (valor==1) {

    if ((a+b)%2==0) {
      fill(255, 0, 255);
    } else {
      fill(255, 255, 0);
    }
  }
  else if (valor==2) {

    if ((a+b)%2==0) {
      fill(0, 0, 255);
    } else {
      fill(255, 127, 0);
    }
  }
  else if (valor==3) {

    if ((a+b)%2==0) {
      //funcion random
      fill(0, random(255), 0);
    } else {
      fill(random(255), 0, 0);
    }
  }
}

//evento mouse q modifique variable
function mousePressed() {
  valor = modvalor(valor);
}

//funcion q retorna valor
function modvalor(v) {
  if (v<3) {
    v++;
  } else {
    v=0;
  }
  return v;
}

//reinicio
function iniciar() {
  valor = 0;
}

function keyPressed() {
  if (key == 'j') {
    iniciar();
  }
}
