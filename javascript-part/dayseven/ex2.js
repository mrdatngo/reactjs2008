// get
var firstInput = document.querySelector("div#cal input.js-first-input")
var secondInput = document.querySelector("div#cal input.js-second-input")
var resultInput = document.querySelector("div#cal input.js-input-result")
var operatorSelect = document.querySelector("div#cal select.js-operator")
var resultButton = document.querySelector("div#cal button.js-btn-result")
console.log(firstInput, secondInput, resultInput, operatorSelect, resultInput)

// event
resultButton.addEventListener("click", function() {
    // alert("Button clicked!")
    var result = calculate()
    updateResult(result)
})

secondInput.addEventListener("input", function() {
    var result = calculate()
    updateResult(result)
})

firstInput.addEventListener("input", function() {
    var result = calculate()
    updateResult(result)
})

function hello() {
    alert("Hello")
}

// logic
function calculate() {
    var firstValue = Number(firstInput.value)
    var secondValue = Number(secondInput.value)
    var operator = operatorSelect.value
    var result = 0
    switch(operator){
        case "+":
            result = firstValue + secondValue
            break;
        case "-":
            result = firstValue - secondValue
            break;
        case "*":
            result = firstValue * secondValue
            break;
        case "/":
            result = firstValue / secondValue
            break;
    }
    console.log("Result: ", result)
    return result
}

// update
function updateResult(result) {
    resultInput.value = result
}