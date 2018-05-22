let dino;
let obstaclesArray = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  dino = new Dino();
  obstaclesArray.push(new CactusObstacle());
}

function draw() {
  background(0);
  dino.renderDino();
  dino.updateDinoPosition();

  for (obstacle of obstaclesArray) {
    // console.log(obstacle);
    obstacle.renderObstacle();
    obstacle.updateObstacle();

    if(obstacle.isOffScreen()){
      obstaclesArray.shift()
    }

    if(obstacle.detectsHit(dino)){
      console.log("hit detected");
    }
  }

  this.addAndRemoveObstacleToFrame();
}

function addAndRemoveObstacleToFrame(){

  if(frameCount % 100 == 0){
    obstaclesArray.push(new CactusObstacle());
  }
}

function keyPressed() {
  if (key == ' ') {
    // console.log("spacePressed");
    dino.jump();
  }
}
