let backgroundImg;
let dog;
let dogImg;
let cat;
let catImg;
let dogX;
let catX;
let time = 0;
let foodImg;
let firstSave = (window.localStorage.getItem(`timeSaved`) === null) ? Date.now() : window.localStorage.getItem(`timeSaved`);
let ballImg;
let ball

function setup() {
  createCanvas(windowWidth, windowHeight);
  dog = new Dog("Emil", dogImg, "a465ce04-d64c-4d35-93f3-2251e5f9fcdc")
  cat = new Cat("Casper", catImg, "c46360f6-0c0b-4de3-870b-ea98a720a676")
  ball =new Ball(ballImg)
  dogX = width / 2
  catX = width / 3
  window.localStorage.setItem(`timeSaved`, firstSave)
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  image(foodImg, width * 8.75 / 10, height / 10, min(width,height)/5, min(width,height)/5)

  text(`DOG AFFINITY: ${dog.affinity}\nCAT AFFINITY: ${cat.affinity}\nSeconds played: ${(Date.now() - firstSave)/1000}`,width/20, height/20);

  dog.walkAround()
  cat.walkAround()
  ball.update()

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
  foodImg = loadImage('images/le food.png')
  ballImg = loadImage('images/le ball.png')
}

function mousePressed() {
  if(dog.wasPetClicked()) {
    dog.pet()
  }
  
  if(cat.wasPetClicked()) {
    cat.pet()
  }

  if(wasFoodPressed()){
    dog.eat()
    cat.eat()
  }

  if(ball.wasBallPressed()){
    ball.throwBall()
  }
  console.log(ball.wasBallPressed())
}

function wasFoodPressed(){
  if(width * 8.75 / 10 < mouseX && width * 8.75 / 10 + min(width,height)/5 > mouseX) { //Is inside of X bounds
    if (height / 10 < mouseY && height / 10 + min(width,height)/5 > mouseY) { //Is inside of Y bounds
        return true
    }
  }
  return false
}