let backgroundImg;
let dog;
let dogImg;
let cat;
let catImg;
let dogX;
let catX;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog("Emil", dogImg, "a465ce04-d64c-4d35-93f3-2251e5f9fcdc")
  cat = new Cat("Casper", catImg, "c46360f6-0c0b-4de3-870b-ea98a720a676")
  dogX = width / 2
  catX = width / 3
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  walkAround()
  text(`DOG AFFINITY: ${dog.affinity}\nCAT AFFINITY: ${cat.affinity}`,width/20, height/20);

  time++;
  if (time % 100 == 0) {
    dog.isPetDead()
    cat.isPetDead()
  }
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
  if (!cat.isDead) {
    let deltaX = random(-5,5)
    catX += deltaX
    //Check if sides are hit
    if (catX < 0) catX = 0;
    if (catX > width - cat.size) catX = width - cat.size

    cat.drawAnimal(catX, height * 2/3, min(width,height)/4);
  }

  if (!dog.isDead) {
    //DOG
    deltaX = random(-10,10)
    dogX += deltaX;
    //Check if sides are hit
    if (dogX < 0) dogX = 0;
    if (dogX > width - dog.size) dogX = width - dog.size
  
    dog.drawAnimal(dogX, height * 2/3, min(width,height)/3);
  }
}