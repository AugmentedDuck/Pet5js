class Cat extends Pet {
    constructor(name, catImage){
        super(name, "cat", catImage)
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