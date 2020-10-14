// step 1: listen event của button
var btnResult = document.querySelector("div#ex button.js-btn-result")
btnResult.addEventListener("click", () => {
    // console.log(Number(inputNumber.value))
    processing()
})
// step 2: validate value in input
var inputNumber = document.querySelector("div#ex input.js-input")
function processing() {
    var value = Number(inputNumber.value)
    if (isNaN(value)) {
        alert("Vui lòng nhập số")
    } else {
        // validate success
        removePreviousChild()
        printValue(value)
    }
}

// step 3: print value
var div = document.querySelector("div#ex")
function printValue(number) {
    for(var i = 0; i < number; i++) {
        var p = document.createElement("p")
        p.innerText = i + 1
        div.appendChild(p)
    }
}

function removePreviousChild() {
    var childs = document.querySelectorAll("div#ex p")
    childs.forEach(child => {
        div.removeChild(child)
    })
}