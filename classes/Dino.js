function Dino() {
  this.yPosition = height - 200;
  this.xPosition = 200;
  this.gravityForce = 2;
  this.velocity = 0;
  this.jumpHeight = 15

  this.renderDino = function() {
    fill(255);
    rect(this.xPosition, this.yPosition, 30, 60);
  }

  this.updateDinoPosition = function() {
    this.velocity += this.gravityForce;
    this.yPosition += this.velocity

    if (this.yPosition > (height - 200)) {
      this.yPosition = (height - 200)
      this.velocity = 0;
    }
  }

  this.jump = function() {
    this.velocity += -(this.gravityForce * this.jumpHeight);
  }
}
