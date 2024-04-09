class Pet {
    constructor(name, species, petImage){
        this.name = name;
        this.species = species;
        this.affinity = 0;
        this.petImage = petImage;
        this.posX = 0;
        this.posY = 0;
        this.size = 0;
        this.lastAte = Date.now();
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
        this.posX = posX
        this.posY = posY
        this.size = size
    }

    eat(){
        this.lastAte = Date.now()
    }

    updateAffinity(amount) {
        this.affinity += amount
    }

    wasPetClicked() {
        if(this.posX < mouseX && this.posX + this.size > mouseX) { //Is inside of X bounds
            if (this.posY < mouseY && this.posY + this.size > mouseY) { //Is inside of Y bounds
                return true
            }
        }
        return false
    }
}