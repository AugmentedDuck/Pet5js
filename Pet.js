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
        this.isDead = false;
        this.foodAte = 0
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
        this.posX = posX
        this.posY = posY
        this.size = size
    }

    eat(){
        this.foodAte += 1
        let dateNow = Date.now()
        if (dateNow - this.lastAte > 1*60*1000) {
            console.log("first if statement")
            if (24*60*60*1000 > dateNow - this.lastAte) {
                console.log("second if statement")
                this.updateAffinity(1)   
            }
        }
        this.lastAte = dateNow
        window.localStorage.setItem(`${this.id}-eat`, this.lastAte)

        if(this.foodAte > 10){
        this.isDead = true
        }

        if(dateNow%1000 * 60 == 0){
            this.foodAte = 0
        }
    }

    updateAffinity(amount) {
        this.affinity += amount
    }

    isPetDead() {
        if (this.lastAte - Date.now() > 5*24*60*60) {
            this.isDead = true
            return true
        }

        return false
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