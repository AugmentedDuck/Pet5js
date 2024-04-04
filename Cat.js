class Cat extends Pet {
    constructor(name, catImage){
        super(name, "cat", catImage)
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
    }

    pet() {
        
    }

    sleep() {

    }

    LayInBox() {
        
    }

    hairball() {
        
    }
}