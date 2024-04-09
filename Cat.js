class Cat extends Pet {
    constructor(name, catImage, id){
        super(name, "cat", catImage, id)
    }

    pet() {
        this.updateAffinity(random([-1,0,1]))
    }

    sleep() {

    }

    LayInBox() {
        
    }

    hairball() {
        
    }
}