class Pet {
    constructor(name, species, petImage, id){
        this.name = name;
        this.species = species;
        this.affinity = 0;
        this.petImage = petImage;
        this.posX = 0;
        this.posY = 0;
        this.size = 0;
        this.id = id;
        this.lastAte = (window.localStorage.getItem(`${this.id}-eat`) === undefined) ? 0 : window.localStorage.getItem(`${this.id}-eat`);
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
        this.posX = posX
        this.posY = posY
        this.size = size
    }

    eat(){
        console.log(this.lastAte)
        this.lastAte = Date.now()
        window.localStorage.setItem(`${this.id}-eat`, this.lastAte)
        console.log(this.lastAte)
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