class Dog extends Pet {
    constructor(name, dogImage){
        super(name, "dog", dogImage)
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
    }

    pet() {
        
    }

    walk() {

    }

    playFetch() {
        
    }

    lickOwner() {

    }
}