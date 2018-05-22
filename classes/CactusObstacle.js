function CactusObstacle() {

  this.x = width;

  this.width = random(width / 30);
  this.gameSpeed = 5;

  this.renderObstacle = function() {
    fill(255);
    rect(this.x, 550, this.width, 100)
  }
  this.updateObstacle = function() {
    this.x -= this.gameSpeed;
  }
}
