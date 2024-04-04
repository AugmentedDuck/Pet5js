let backgroundImg;
let dog;
let dogImg


function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog("Emil", dogImg)
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  dog.drawAnimal(width / 2, height * 2/3, 200)
}

function preload() {
  backgroundImg = loadImage('images/le house.jpeg');
  dogImg = loadImage('images/le dog.png')
}