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
        this.lastAte = (window.localStorage.getItem(`${this.id}-eat`) === null) ? 0 : window.localStorage.getItem(`${this.id}-eat`);
        this.isDead = false;
        this.targetX;
    }

    drawAnimal(posX, posY, size){
        image(this.petImage, posX, posY, size, size)
        this.posX = posX
        this.posY = posY
        this.size = size
    }

    eat(){
        let dateNow = Date.now()
        if (this.lastAte - dateNow > 10*60*60*1000) {
            if (24*60*60*1000 > this.lastAte - dateNow) {
                this.updateAffinity(1)    
            }
        }
        this.lastAte = dateNow
        window.localStorage.setItem(`${this.id}-eat`, this.lastAte)
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

    walkAround() {
        if (!this.isDead) {
            //DOG
            if(round(this.targetX) == round(this.posX) || !this.targetX) {
              this.targetX = random(0,width - this.size)
            }
            this.posX = lerp(this.posX, this.targetX, 0.05)
          
            this.drawAnimal(this.posX, height * 2/3, min(width,height)/3);
          }
    }
}