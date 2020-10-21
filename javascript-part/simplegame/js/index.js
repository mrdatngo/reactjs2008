var simpleGameCanvas = document.getElementById("simple-game")
var ctx = simpleGameCanvas.getContext("2d")
// ctx.fillStyle = "#FFF"
// ctx.fillRect(0, 0, 200, 200)
// ctx.fillStyle = "#FFF"
// ctx.fillRect(0, 0, 200, 200)
var img = document.createElement("img")
img.src = "images/player.jpg"

window.onload = function () {
    ctx.drawImage(img, 10, 10, 50, 50)
    // setTimeout(() => {
    //     ctx.drawImage(img, 50, 50, 50, 50)
    // }, 1000)
}

document.addEventListener("keyup", function(event) {
    // console.log("Event: ", event)
    if (event.code == "ArrowUp") {
        ctx.fillStyle = "#FFF"
        ctx.fillRect(0, 0, 500, 500)
        ctx.drawImage(img, 10, 0, 50, 50)
    }
})
