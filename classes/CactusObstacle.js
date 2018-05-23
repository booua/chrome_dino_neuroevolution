class CactusObstacle {

  constructor(gameSpeed) {
    this.xPosition = width;
    this.height = 50
    this.yPosition = height - 200 - this.height;
    this.width = Math.floor((Math.random() * 50) + 10);
    this.gameSpeed = gameSpeed;
  }

  renderObstacle() {
    fill(255);
    rect(this.xPosition, this.yPosition, this.width, this.height)
  }

  updateObstacle() {
    this.xPosition -= this.gameSpeed;
  }

  isOffScreen() {
      return (this.xPosition < -this.width);
  }

  detectsHit(dino) {

    if ((height - dino.yPosition) < (this.yPosition + this.height)) {
      if (dino.xPosition > this.xPosition && dino.xPosition < this.xPosition + this.width) {
        return true;
      }
    }
  }
}
