var imgTrap = document.createElement("img")
imgTrap.src = "images/trap.png"

class Trap {
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }
    draw = function(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}