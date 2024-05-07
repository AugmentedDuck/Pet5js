class Dog extends Pet {
    constructor(name, dogImage, id){
        super(name, "dog", dogImage, id)
    } 

    pet() {
        this.updateAffinity(1);
    }

    walkTo(newX, ballStandingStill) {
        if (ballStandingStill) {
            this.canWalkAround = true
        }
        this.canWalkAround = false
        this.targetX = newX
        if (!this.isDead) {
            if(round(this.targetX) == round(this.posX) || !this.targetX) {
                this.canWalkAround = true
            }
            this.posX = lerp(this.posX, this.targetX, 0.05)
              
            this.drawAnimal(this.posX, height * 2/3, min(width,height)/3);
        }
    }

    playFetch() {

    }

    lickOwner() {

    }
}