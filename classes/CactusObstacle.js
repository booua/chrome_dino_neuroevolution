function CactusObstacle() {

  this.xPosition = width;
  this.width = random(height / 30);
  this.gameSpeed = 5;
  this.height = 50

  this.renderObstacle = function() {
    fill(255);
    rect(this.xPosition, 575, this.width, this.height)
  }

  this.updateObstacle = function() {
    this.xPosition -= this.gameSpeed;
  }

  this.isOffScreen = function(){
    return this.xPosition < -this.width
  }

  this.detectsHit = function(dino){
    if(dino.yPosition > height - this.height){
      if(dino.xPosition > this.xPosition && dino.xPosition < this.xPosition + this.width){
      return true;
      }
    }
  }
}
