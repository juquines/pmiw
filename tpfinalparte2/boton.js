class boton {
  constructor(x, y, an, al,texto) {
    this.x= x;
    this.y= y;
    this.an= an;
    this.al= al;
    this.texto =texto;
  }

  mostrar() {
    if (this.dondetoy()) {
      fill(210, 180, 140); 
    } else {
      fill(77, 51, 25); 
    }
    rect(this.x, this.y, this.an, this.al);
    
    push();
    fill(255); 
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.an / 2, this.y + this.al / 2);
    pop();
  }
  
dondetoy() {
    return mouseX > this.x && mouseX < this.x + this.an && mouseY > this.y && mouseY < this.y + this.al;
  }
}
