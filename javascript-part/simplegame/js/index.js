var simpleGameCanvas = document.getElementById("simple-game")
var ctx = simpleGameCanvas.getContext("2d")
var img = document.createElement("img")
img.src = "images/player.png"

var screen = {
    width: 500,
    height: 500
}

class Player {
    constructor(x, y, width, height, img, step) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.step = step;
    }

    moveUp = function () {
        if (this.y - this.step >= 0) {
            this.y -= this.step
        }
    }
    moveDown = function () {
        if (this.y + this.step + this.height <= screen.height) {
            this.y += this.step
        }
    }
    moveLeft = function () {
        if (this.x - this.step >= 0) {
            this.x -= this.step
        }
    }
    moveRight = function () {
        if (this.x + this.width + this.step <= screen.width) {
            this.x += this.step
        }
    }
    draw = function(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

var player = new Player(0, 0, 50, 50, img, 50)
var treasures = [
    new Treasure(100, 100, 50, 50, imgTreasure),
    new Treasure(200, 200, 50, 50, imgTreasure)
]
var traps = [
    new Trap(0, 300, 50, 50, imgTrap),
    new Trap(300, 0, 50, 50, imgTrap),
]

window.onload = function () {
    // ctx.drawImage(player.img, player.x, player.y, player.width, player.height)
    clearScreen()
    player.draw(ctx)
}

function clearScreen() {
    ctx.fillStyle = "grey"
    ctx.fillRect(0, 0, 500, 500)
}

document.addEventListener("keyup", function(event) {
    // console.log("Event: ", event)
    switch (event.code) {
        case "ArrowUp":
            player.moveUp()
            checkConflict()
            break;
        case "ArrowDown":
            player.moveDown()
            checkConflict()
            break;
        case "ArrowLeft":
            player.moveLeft()
            checkConflict()
            break;
        case "ArrowRight":
            player.moveRight()
            checkConflict()
            break;
    }
})
// check player move has reached treasures, traps
// kiem tra player dung cham kho bau, bay
function checkConflict() {
    // player and treasures
    treasures.forEach(treasure => {
        if (player.x == treasure.x && player.y == treasure.y) {
            treasures = treasures.filter(curTreasure => {
                return curTreasure != treasure
            })
        }
    })
    traps.forEach(trap => {
        if (player.x == trap.x && player.y == trap.y) {
            alert("You lose")
        }
    })
}

function render() {
    setInterval(() => {
        clearScreen()
        player.draw(ctx)
        treasures.forEach(treasure => {
            treasure.draw(ctx)
        })
        traps.forEach(trap => {
            trap.draw(ctx)
        })
    }, 1);
}

render()