function Dino() {
  this.yPosition = height - 200;
  this.xPosition = 200;
  this.gravityForce = 5;
  this.velocity = 0;
  this.jumpHeight = 10

  this.renderDino = function() {
    fill(255);
    ellipse(this.xPosition, this.yPosition, 50, 50);
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
