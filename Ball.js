class Ball {
    constructor(ballImg) {
        this.posX = 100;
        this.posY = 100;
        this.size = 40;
        this.xSpeed = 0
        this.ySpeed = 0
        this.ballImg = ballImg;
        this.isThrown = false;
    }

    drawBall() {
        image(this.ballImg, this.posX, this.posY, this.size, this.size)
    }

    update() {
        this.posY += this.ySpeed; // Update y position

        // Gravity
        if (this.posY < height - this.size) { // Check if not on the ground
            this.ySpeed += 0.5; // Increment ySpeed to simulate gravity
        } else if (this.ySpeed == 0.1) {
            this.posY = height - this.size;
            this.xSpeed *= 0.6
        } else {
            this.ySpeed *= -0.9; // Reset ySpeed when it hits the ground
            this.xSpeed *= 0.9
        }

        if (Math.abs(this.xSpeed) > 0.1) {
            this.xSpeed *= 0.99
        } else {
            this.xSpeed = 0
        }

        if (this.posX > width - this.size || this.posX < 0) { // Check if not on the ground
            this.xSpeed *= -1.501
        }

        this.posX += this.xSpeed;


        this.drawBall(this.posX, this.posY, this.size);
    }

    wasBallPressed() {
        if (this.posX < mouseX && this.posX + this.size > mouseX) { //Is inside of X bounds
            if (this.posY < mouseY && this.posY + this.size > mouseY) { //Is inside of Y bounds
                return true
            }
        }
        return false
    }

    throwBall() { // THIS SHIT NEED FIXING; MY NODDING (sig på dansk)
        this.xSpeed = random(-30,30)
        this.ySpeed = random(-20,-10)
        
        console.log("THROWN!", this.xSpeed, " | ", this.ySpeed)
    }

    getXCoord() {
        return this.posX;
    }
};