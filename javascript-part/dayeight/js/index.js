// object
// this pointer
var car = {
    name: "Kia",
    model: "500",
    start: function() {
        console.log(car.name + "'s starting to running")
    }
}

car.color = "Black"
function getData(prop) {
    console.log(car[prop])
}
getData("color")
getData("model")
// car["color"] = "Red"

console.log("Car: ", car)
console.log("Car name: ", car.name)
// invoke
car.start()

for(var prop in car) {
    console.log(prop)
}

// OOP
function CarTemplate(name, color) {
    this.name = name
    this.color = color
    this.stop = function () {
        console.log(this.name + "'s stopping")
    }
}

var carFiat = new CarTemplate("Fiat", "white")
var carKia = new CarTemplate("Kia", "Black")
console.log("carFiat:", carFiat)
console.log("carKia:", carKia)
carFiat.stop()
carKia.stop()
// Class

// class Account {
//     username = "abc"
//     password = "123456"
//     login() {}
// }

// Account.password
// Account.login()

class Car {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    start() {
        console.log( this.name + "'s starting")
    }
}

var kia = new Car("Kia", "Red")
var fiat = new Car("Fiat", "Yellow")
console.log("Kia: ", kia)
kia.start()
console.log("Kia.name", kia.name)
console.log("fiat: ", fiat)
fiat.start()

// Inherit
class Person {
    constructor(firstname, lastname) {
        this.name = "Anonymous"
        this.firstname = firstname
        this.lastname = lastname
    }

    go = function () {
        console.log(this.name + "'s going")
    }
}

// var otherPerson = new Person("John")
class Student extends Person {
    constructor(lastname, studentId) {
        super("", lastname)
        this.studentId = studentId
    }
    getName = function() {
        return this.name
    }
}

var nhan = new Student("Nhan", 1)
console.log("Nhan: ", nhan, nhan.getName())
