const NNinputCount = 4
const NNoutputCount = 1
const NNnodesCount = 4

class Dino {
  constructor() {
    this.yPosition = height - 200;
    this.xPosition = 200;
    this.gravityForce = 2;
    this.velocity = 0;
    this.jumpHeight = 18
    this.brainz = new NeuralNetwork(NNinputCount, NNoutputCount, NNnodesCount)
  }

  decide() {
    let inputs = [1.0, 0.1, 0.5, 0.6];
    let output = this.brainz.predict(inputs)
    if (output > 0.5) {
      this.jump();
    }
  }

  renderDino() {
    fill(255);
    rect(this.xPosition, this.yPosition, 30, 60);
  }

  updateDinoPosition() {
    this.velocity += this.gravityForce;
    this.yPosition += this.velocity

    if (this.yPosition > (height - 200)) {
      this.yPosition = (height - 200)
      this.velocity = 0;
    }
  }

  jump() {
    this.velocity += -(this.gravityForce * this.jumpHeight);
  }
}
