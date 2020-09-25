// regular function
function print(n) {
    if (n < 0) {
        return
    }
    print(n - 1)
    console.log("n: ", n);
}

// expression
const print2 = function(n) {
    if (n < 0) {
        return
    }
    print2(n - 1)
    console.log("n: ", n);
}

// arrow function (fat arrow)
const print3 = (n) => {
    if (n < 0) {
        return
    }
    print3(n - 1)
    console.log("n: ", n);
}

// Example: check Even
function isEven(n) {
    // if (n % 2 == 0) {
    //     return true
    // }
    // return false
    return n % 2 === 0
}

// const isEven2 = (n) => {
//     return n % 2 === 0
// }
// => shortcut
const isEven2 = (n) => n % 2 === 0
// print(5)
// print2(5)
// print3(5)
console.log("isEven(2)", isEven(2))
console.log("isEven2(3)", isEven2(3))

// Math
console.log(Math.round(Math.PI * 100)/100)
// Or
console.log(Math.PI.toFixed(2))
console.log(Math.floor(Math.PI))
console.log(Math.ceil(Math.PI))

// Random
console.log("Random: ", Math.random());

function RandomDice() {
    return Math.floor(Math.random() * 6)
}

function Random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from
}

var value = RandomDice()
console.log("RandomDice(): ", value)
console.log("Random(18, 24): ", Random(18, 24))

// String

var name = "\"'Thoai\"'"
var name2 = '"\tPhong \n new line" \\'
console.log("name: ", name)
console.log("name2: ", name2)

var currentDay = "Thursday"
var hello = "'Today is " + currentDay + "'"
var helloStr = `'Today is ${currentDay}'`
console.log("hello: ", hello)
console.log("helloStr: ", helloStr)


