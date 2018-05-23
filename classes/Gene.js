function nextGeneration() {

  calculateFitnessScore();

  for (let i = 0; i < POPULATION; i++) {
    dinos[i] = pickOneDino();
  }
  deadDinosArray = [];
}

function pickOneDino() {
  let index = 0;
  let randomNumber = random(1);


  while (randomNumber > 0) {
    randomNumber = randomNumber - deadDinosArray[index].fitnessScore;
    index++;

  }
  index--;

  let newGenDino = deadDinosArray[index];
  let childDino = new Dino(newGenDino.brainz);
  childDino.mutate();
  return childDino;
}

function calculateFitnessScore() {
  let totalLifeScore = 0;

  for (let dino of deadDinosArray) {
    totalLifeScore += dino.lifeScore
  }
  for (let dino of deadDinosArray) {
    dino.fitnessScore = dino.lifeScore / totalLifeScore;
  }

}
