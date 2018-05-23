// TODO: add spritesheets

const POPULATION = 200;
let dinos = [];
let obstaclesArray = [];
let deadDinosArray = [];
let gameSpeed = 5
let gameCounter = 0;
let gameCycles = 1;
let generationCount = 0;
let bestScore = 0;
let currentScore = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight * 0.7);
  for (let i = 0; i < POPULATION; i++) {
    dinos[i] = new Dino();
  }

  obstaclesArray.push(new CactusObstacle(gameSpeed));
}

function draw() {

  background(0);
  stroke(255)
  line(0, height - 200, width, height - 200);
  textSize(32);
  text('generationCount: ' + generationCount, 20, 400);
  text('currentScore: ' + currentScore, 20, 440);
  text('bestScore: ' + bestScore, 20, 480);

  for (dino of dinos) {
    dino.renderDino();

  }

  for (obstacle of obstaclesArray) {
    obstacle.renderObstacle();
  }

  for (let i = 0; i < gameCycles; i++) {
    currentScore++;
    for (dino of dinos) {

      dino.decide(obstaclesArray);
      dino.updateDinoPosition();
    }

    if (dinos.length === 0) {
      gameCounter = 0;
      nextGeneration()
      obstaclesArray = []
      obstaclesArray.push(new CactusObstacle(gameSpeed));

    }

    for (let j = obstaclesArray.length - 1; j >= 0; j--) {

      obstaclesArray[j].updateObstacle();

      for (let i = dinos.length - 1; i >= 0; i--) {
        if (obstaclesArray[j] != undefined) {
          if (obstaclesArray[j].detectsHit(dinos[i])) {
            deadDinosArray.push(dinos.splice(i, 1)[0]);
            textSize(32);
            text('hit', 20, 30);
            gameSpeed = 5;
          }

          if (obstaclesArray[j].isOffScreen()) {
            obstaclesArray.splice(j, 1);
          }
        }
      }

    }

    if (frameCount % 100 === 0) {
      gameSpeed += 0.2
    }

    if (frameCount % 50 === 0 && random(0, 1) > 0.3) {
      this.addObstacle();
    }
  }

  gameCounter++;
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
