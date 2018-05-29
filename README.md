# chrome_dino_neuroevolution
Neuroevolution exercise/project based on an offline chrome dino game.
## Hi! :D This one is quite interesting. I'm trying to create a clone of offline Chrome dino game which **plays itself**.
Using **neuroevolution** algorithm (basically genetic algorithm merged with neural network - everything explained below) it tries to evolvolve to beat the best score by deciding wheather jump or not.

How neuroevolution works? Well, from what I understand it goes like this:
1. First you need the genetic algorithm which goes like this:
  1. create a population of **N** elements where each have randomly selected genes
  1. having fitness function (in our case it decides if the dino hit the obstacle or not/it decided to jump or not) evaluate the fitness of each created dino (we create multiple of them) and build mating pool/array
  1. (repeat **N - times*) reproducing - picking the parents with probability based on fitness score, crossing their genes and creating a child and mutating its genes based on set probability
  1. replacing the old generation with new one
  1. go back to step 2 (natural selection)

2.You need to have a neural network with some INPUTS | HIDDEN NODES | AND OUTPUTS;
in our case we have 3 **INPUTS** - yPosition of Dino, yPosition of CactusObstacle and xPosition of CactusObstacle
as an output we use 1 OUTPUT- number between 0-1 (float) where values 0-0.5 indicates not jumping and 0.5-1 : jumping.

3. We combine modify our genetic algorithm in a way that instead of creating population of single elements, we create a set of neural networks with randomly selected weights and stuff...
.
.
.
.
4. Oh almost forgot- then we have to wait until this dumb dino starts to beat its own game. It can take alot of generations, depending on how good is your obstacle avoiding algorithm and game speed and obstacle count.
