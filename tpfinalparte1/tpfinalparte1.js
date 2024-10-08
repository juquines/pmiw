let txt = [];
let escena = [];
let valortxt = 0;
let valorescena = 0;

const posicionytxt = 400;
const posicionxtxt = 50;

function preload() {
  txt = loadStrings("data/causp.txt");

  for (let i = 0; i < 3; i++) {
    escena[i] = loadImage("data/escena" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(20);
}

function draw() {
  background(0);
  
  if (escena[valorescena]) {
    image(escena[valorescena], 0, 0, width, height);
  }
  
  if (frameCount % 240 === 0) {
    valortxt++;
    valorescena++;
  }

  if (valortxt >= 2) {
    valortxt = 2;
  }
  
  if (valorescena > 2) {
    valorescena = 2;
  }
  
  textAlign(CENTER);
  fill(0);
  text(txt[valortxt], posicionxtxt, posicionytxt, 500);
  stroke(210, 180, 140); 
  strokeWeight(2);
}
