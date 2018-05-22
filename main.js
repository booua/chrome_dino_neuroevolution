// TODO: speeding up the game as time passes
// TODO: add spritesheets

let dino;
let obstaclesArray = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight*0.7);
  dino = new Dino();
  obstaclesArray.push(new CactusObstacle());
}

function draw() {
  background(0);
  
  dino.decide();
  dino.renderDino();
  dino.updateDinoPosition();

  for (obstacle of obstaclesArray) {
    obstacle.renderObstacle();
    obstacle.updateObstacle();

    if(obstacle.isOffScreen()){
      obstaclesArray.shift()
    }

    if(obstacle.detectsHit(dino)){
      textSize(32);
      text('hit', 20, 30);
    }
  }

  this.addAndRemoveObstacleToFrame();
}

function addAndRemoveObstacleToFrame(){
// TODO: randomize obstacle occurances
  if(frameCount % 100 == 0){
    let cactus = new CactusObstacle()
    obstaclesArray.push(cactus);
  }
}

function keyPressed() {
  if (key == ' ') {
    dino.jump();
  }
}
