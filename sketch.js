let backgroundImg;
let dog;
let dogImg;
let cat;
let catImg;


function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog("Emil", dogImg)
  cat = new Cat("casper", catImg)
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  dog.drawAnimal(width / 2, height * 2/3, min(width,height)/3)
  cat.drawAnimal(width / 3, height * 2/3, min(width,height)/4)
  text(`DOG AFFINITY: ${dog.affinity}\nCAT AFFINITY: ${cat.affinity}`,width/20, height/20)
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