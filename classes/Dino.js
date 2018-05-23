const NNinputCount = 3
const NNoutputCount = 1
const NNnodesCount = 4
const MUTATE_RATE = 0.03;

class Dino {
  constructor(brainz) {
    this.height = 60;
    this.xPosition = 200;
    this.yPosition = height - 200 - this.height;
    this.gravityForce = 2;
    this.velocity = 0;
    this.width = 30;
    this.jumpHeight = 18
    this.lifeScore = 0;
    this.fitnessScore = 0;
    if (brainz) {
      this.brainz = brainz.copy();
    } else {
      this.brainz = new NeuralNetwork(NNinputCount, NNoutputCount, NNnodesCount)
    }

  }

  decide(obstacles) {
    let nearestObstacle = null;
    let nearestDistance = Infinity;

    for (var cactus of obstacles) {
      let distance = cactus.xPosition - this.xPosition;
      if (distance < nearestDistance && distance > 0) {
        nearestObstacle = cactus;
        nearestDistance = distance
      }
    }

    let inputs = [];
    inputs[0] = this.yPosition / height;
    inputs[1] = nearestObstacle.height / height;
    inputs[2] = nearestObstacle.xPosition / height;

    let output = this.brainz.predict(inputs);
    if (output[0] > 0.5) {
      this.jump();
    }
  }
  mutate(){
    this.brainz.mutate(MUTATE_RATE);
  }
  renderDino() {
    fill(255, 50);
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }

  updateDinoPosition() {
    this.lifeScore++;
    this.velocity += this.gravityForce;
    this.yPosition += this.velocity

    if (this.yPosition >= (height - 200 - this.height)) {
      this.yPosition = (height - 200 - this.height);
      this.velocity = 0;
    }
  }

  duck() {
    this.velocity += (this.gravityForce * this.jumpHeight);
    this.height = this.height / 2;

  }

  standUp() {
    this.height = 60;
  }

  jump() {
    this.velocity += -(this.gravityForce * this.jumpHeight);
    if (this.velocity != -(this.gravityForce * this.jumpHeight)) {
      this.velocity = 0;
    }

  }
}
