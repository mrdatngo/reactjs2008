// binding bind()
class Car {
    constructor(name, color) {
        this.name = name
        this.color = color
        // this.start = this.start.bind(this)
    }

    // start = function() {
    //     console.log(this.name + "'s starting")
    // }.bind(this)

    start = () => {
        console.log(this.name + "'s starting")
    }
}

var kia = new Car("Kia", "Red")
var fiat = new Car("Fiat", "Black")
console.log("Kia: ", kia)
kia.start()

this.name = "Fiat"

// var run = kia.start
var run = kia.start
console.log("Run: ", run)
run()

// function run(callback) {
//     callback()
// }
// run(kia.start)