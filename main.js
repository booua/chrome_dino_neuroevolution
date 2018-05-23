// TODO: speeding up the game as time passes
// TODO: add spritesheets

const POPULATION = 200;
let dinos = [];
let obstaclesArray = [];
let gameSpeed = 5


function setup() {
  createCanvas(window.innerWidth, window.innerHeight * 0.7);
  for(let i = 0; i<POPULATION; i++){
    dinos[i] = new Dino();
  }

  obstaclesArray.push(new CactusObstacle(gameSpeed));
}

function draw() {
  background(0);
  stroke(255)
  line(0, height - 200, width, height - 200);

  for(dino of dinos){
    dino.decide(obstaclesArray);
    dino.updateDinoPosition();
    dino.renderDino();
  }

  for (obstacle of obstaclesArray) {
    obstacle.renderObstacle();
    obstacle.updateObstacle();

    for(let i = dinos.length-1; i>=0;i--){
      if (obstacle.detectsHit(dinos[i])) {
        dinos.splice(i,1);
        textSize(32);
        text('hit', 20, 30);
      }
    }
    if (obstacle.isOffScreen()) {
      obstaclesArray.shift()
    }


  }

  if (frameCount % 100 === 0) {
    gameSpeed += 0.2
  }

  if(frameCount % 50 === 0 && random(0,1) > 0.3){
    this.addObstacle();
  }

}

function addObstacle() {

    let cactus = new CactusObstacle(gameSpeed)
    obstaclesArray.push(cactus);

}

function keyPressed() {

  if (key == ' ' || keyCode == UP_ARROW) {
    dino.jump();
  }
  if (keyCode == DOWN_ARROW) {
    dino.duck();
  }

}
function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    dino.standUp();
  }
}
