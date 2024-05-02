let backgroundImg;
let dogs = [];
let dogImg;
let cats = [];
let catImg;
let dogX;
let catX;
let time = 0;
let foodImg;
let firstSave = (window.localStorage.getItem(`timeSaved`) === null) ? Date.now() : window.localStorage.getItem(`timeSaved`);
let liveAnimals = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAnimals()

  dogX = width / 2
  catX = width / 3
  window.localStorage.setItem(`timeSaved`, firstSave)


  let button = createButton('Buy Animal');
  button.position(0, 100);

  button.mousePressed(addAnimal);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  image(foodImg, width * 8.75 / 10, height / 10, min(width,height)/5, min(width,height)/5)

  text(`Seconds played: ${(Date.now() - firstSave)/1000}`,width/20, height/20);

  for (const dog of dogs) {
    dog.walkAround()
    if (time % 100 == 0) {
      if (dog.isPetDead()) {
        removeAnimal("D" + dog.id)
      }
    }
  }

  for (const cat of cats) {
    cat.walkAround()
    if (time % 100 == 0) {
      if (cat.isPetDead()) {
        removeAnimal('C' + cat.id)
      }
    }
  }

  time++;
  
}

function preload() {
  backgroundImg = loadImage('images/le house.jpeg');
  dogImg = loadImage('images/le dog.png')
  catImg = loadImage('images/le cat.png')
  foodImg = loadImage('images/le food.png')
}

function mousePressed() {
  for (const dog of dogs) {
    if(dog.wasPetClicked()) {
      dog.pet()
    }  
  }

  for (const cat of cats) {
    if(cat.wasPetClicked()) {
      cat.pet()
    }  
  }

  if(wasFoodPressed()){
    for (const dog of dogs) {
      dog.eat()
    }

    for (const cat of cats) {
      cat.eat()
    }
  }
}

function wasFoodPressed(){
  if(width * 8.75 / 10 < mouseX && width * 8.75 / 10 + min(width,height)/5 > mouseX) { //Is inside of X bounds
    if (height / 10 < mouseY && height / 10 + min(width,height)/5 > mouseY) { //Is inside of Y bounds
        return true
    }
  }
  return false
}

function saveAnimals() {
  let savefile = ""
  for (const animal of liveAnimals) {
    savefile += animal + " "
  }
  savefile.trim()

  console.log(savefile)
  window.localStorage.setItem("allIDs", savefile)
}

function removeAnimal(id) {
  liveAnimals.splice(liveAnimals.indexOf(id))
  saveAnimals();
}

function addAnimal() {
  let newID = crypto.randomUUID()
  if (Math.round(Math.random()) == 1) {
    liveAnimals.push("D" + newID)
    dogs.push(new Dog('Name', dogImg, newID))
  } else {
    liveAnimals.push("C" + newID)
    cats.push(new Cat('Name2',catImg,newID))
  }

  saveAnimals();
}

function loadAnimals() {
  let animalIDAll = window.localStorage.getItem('allIDs')

  liveAnimals = animalIDAll.split(' ');
  for (const animal of liveAnimals) {
    let animalID = animal.slice(1, animal.length - 1)
    if (animal.charAt(0) == "D") {
      dogs.push(new Dog('Emil', dogImg, animalID))
    } else {
      cats.push(new Cat('Casper', catImg, animalID))
    }
  }
}