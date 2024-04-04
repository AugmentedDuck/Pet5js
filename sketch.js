function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0, width, height);
}

function preload() {
  img = loadImage('images/le house.jpeg');
}