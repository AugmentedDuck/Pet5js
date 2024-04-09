let backgroundImg;
let dog;
let dogImg;
let cat;
let catImg;
let dogX;
let catX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog("Emil", dogImg)
  cat = new Cat("casper", catImg)
  dogX = width / 2
  catX = width / 3
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  walkAround()
  text(`DOG AFFINITY: ${dog.affinity}\nCAT AFFINITY: ${cat.affinity}`,width/20, height/20);
}

function preload() {
  backgroundImg = loadImage('images/le house.jpeg');
  dogImg = loadImage('images/le dog.png')
  catImg = loadImage('images/le cat.png')
}

function mousePressed() {
  if(dog.wasPetClicked()) {
    dog.pet()
  }
  
  if(cat.wasPetClicked()) {
    cat.pet()
  }
}

function walkAround() {
  //DOG
  let deltaX = random(-10,10)
  dogX += deltaX;
  //Check if sides are hit
  if (dogX < 0) dogX = 0;
  if (dogX > width - dog.size) dogX = width - dog.size
  
  dog.drawAnimal(dogX, height * 2/3, min(width,height)/3);

  //CAT
  deltaX = random(-5,5)
  catX += deltaX
  //Check if sides are hit
  if (catX < 0) catX = 0;
  if (catX > width - cat.size) catX = width - cat.size

  cat.drawAnimal(catX, height * 2/3, min(width,height)/4);
}