var div = document.createElement("div")
var h3 = document.createElement("h3")
var p = document.createElement("p")
var button = document.createElement("button")

div.appendChild(h3)
div.appendChild(p)
div.appendChild(button)

// content
h3.innerText = "Hello Class"
p.innerText = "This is ReactJS class"
button.innerText = "Remove"

// style
div.style.backgroundColor = "honeydew"
div.style.textAlign = "center"
h3.style.color = "blue"

document.body.appendChild(div)

// remove
// div.removeChild(p)

// events
// button.onclick = function() {
//     div.removeChild(p)
// }

button.addEventListener("click", function () {
    div.removeChild(p)
})

function removePChild() {
    div.removeChild(p)
}

// get btn
var firstBtn = document.getElementById("js-btn-remove")
firstBtn.addEventListener("click", function() {
    div.removeChild(p)
    document.title = "Removed Child"
})

// var h3Elem = document.querySelector("h3.intro")
// h3Elem.style.color = "red"
var allIntro = document.querySelectorAll(".intro")
allIntro.forEach(elem => {
    elem.style.color = "red"
})