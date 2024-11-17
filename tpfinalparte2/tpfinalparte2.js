//comision 1 - Juliana Quines Streisys - Agostina Milla
//


let juego;
let musik;

function preload () {
  musik = loadSound("data/musika.mp3");
}

function setup () {
  createCanvas(640, 480);
  juego = new main();
}


function draw() {
  background (200);
  juego.estados();
}

function mousePressed(){
  juego.cambios();
 if (juego.estado === "juego") {
  juego.lanzarCuchillo();
}
}
