class CactusObstacle {
  constructor(){
    this.xPosition = width;
    this.yPosition = height - 200;
    this.width = Math.floor((Math.random() * 50) + 10);
    this.gameSpeed = 5;
    this.height = 50
  }


  renderObstacle() {
    fill(255);
    rect(this.xPosition, this.yPosition, this.width, this.height)
  }

  updateObstacle() {
    this.xPosition -= this.gameSpeed;
  }

  isOffScreen(){
    return this.xPosition < -this.width
  }

  detectsHit(dino){

    if((height - dino.yPosition) < (this.yPosition+this.height)){
      if(dino.xPosition+30 > this.xPosition && dino.xPosition+30 < this.xPosition + this.width){
      return true;
      }
    }
  }

}
