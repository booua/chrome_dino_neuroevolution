var dino;
var obstaclesArray = [];
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
    console.log(obstacle);
    obstacle.renderObstacle();
    obstacle.updateObstacle();
  }
}

function keyPressed() {
  if (key == ' ') {
    console.log("spacePressed");
    dino.jump();
  }
}
