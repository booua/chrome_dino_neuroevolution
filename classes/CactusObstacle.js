function CactusObstacle() {

  this.xPosition = width;
  this.yPosition = height - 200;
  this.width = Math.floor((Math.random() * 50) + 10);
  this.gameSpeed = 5;
  this.height = 50

  this.renderObstacle = function() {
    fill(255);
    rect(this.xPosition, this.yPosition, this.width, this.height)
  }

  this.updateObstacle = function() {
    this.xPosition -= this.gameSpeed;
  }

  this.isOffScreen = function(){
    return this.xPosition < -this.width
  }

  this.detectsHit = function(dino){

    if((height - dino.yPosition) < (this.yPosition+this.height)){
      if(dino.xPosition+30 > this.xPosition && dino.xPosition+30 < this.xPosition + this.width){
      return true;
      }
    }
  }

}
