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
  dog.drawAnimal(width / 2, height * 2/3, 200)
  cat.drawAnimal(width / 3, height * 2/3, 150)
}

function preload() {
  backgroundImg = loadImage('images/le house.jpeg');
  dogImg = loadImage('images/le dog.png')
  catImg = loadImage('images/le cat.png')
}