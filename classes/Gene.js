
function nextGeneration(){

  calculateFitnessScore();

  for(let i = 0; i<POPULATION; i++){
    dinos[i] = pickOneDino()//new Dino();
  }
  deadDinosArray = [];
}

function pickOneDino(){
  let newGenDino = random(deadDinosArray)
  let childDino = new Dino(newGenDino.brainz)
  childDino.mutate()
  return childDino;
}

function calculateFitnessScore(){
 let totalLifeScore = 0;

 for (let dino in dinos){
    totalLifeScore += dino.lifeScore
 }
 for (let dino in dinos){
     dino.fitnessScore = dino.lifeScore / totalLifeScore;
 }

}
