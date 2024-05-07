class Dog extends Pet {
    constructor(name, dogImage, id){
        super(name, "dog", dogImage, id)
    } 

    pet() {
        this.updateAffinity(1);
    }

    walkTo() {

    }

    playFetch() {
        
    }

    lickOwner() {

    }
}