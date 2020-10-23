var imgTreasure = document.createElement("img")
imgTreasure.src = "images/treasure.png"

class Treasure {
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