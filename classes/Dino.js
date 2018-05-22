class Dino {
  constructor(){
    this.yPosition = height - 200;
    this.xPosition = 200;
    this.gravityForce = 2;
    this.velocity = 0;
    this.jumpHeight = 15
  }

  renderDino() {
    fill(255);
    rect(this.xPosition, this.yPosition, 30, 60);
  }

  updateDinoPosition() {
    this.velocity += this.gravityForce;
    this.yPosition += this.velocity

    if (this.yPosition > (height - 200)) {
      this.yPosition = (height - 200)
      this.velocity = 0;
    }
  }

  jump() {
    this.velocity += -(this.gravityForce * this.jumpHeight);
  }
}
