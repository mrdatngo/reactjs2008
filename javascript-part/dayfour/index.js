// strings
var name = "Toai Toai"
console.log("first character: ", name[0])
console.log("last character: ", name[name.length - 1])

// format special name
name[0] = "T" //=> name = "Toai"
console.log("Name: ", name)
    // var formatName = "";
    // for(var i = 0; i < name.length; i++) {
    //     if (i === 0) {
    //         formatName += name[i].toUpperCase()
    //     } else {
    //         formatName += name[i].toLowerCase()
    //     }
    // }
    // var formatName = name[0].toUpperCase() + name.substring(1, name.length).toLowerCase()
console.log("Name: ", name);
console.log("toUpperCase(): ", name.toUpperCase())
console.log("toLowerCase(): ", name.toLowerCase())
console.log("charAt(): ", name.charAt(0))
console.log("indexOf(substr, pos):", name.indexOf("ai1", 0))
console.log("lastIndexOf(substr, pos):", name.lastIndexOf("ai", 7))
console.log(`slice(2, 3): '${ name.slice(2, 3)}'`)
console.log(`substring(2, 3): '${name.substring(2, 3)}'`)
console.log(`substr(2, 3): '${name.substr(2, 3)}'`)
console.log(`replace(substr, substr): '${name.replace("T", "t")}'`)
console.log(`replaceAll(substr, substr): '${name.replaceAll("T", "t")}'`)
console.log(`include("oai"): '${name.includes("T")}'`)

// Practice
var description = "Today is a awful day!"
    // => Thay từ awful => beautiful (no use replace)
    // description.replace("awful", "beautiful")
    // var words = description.split(" ");
    // console.log("words: ", words)
var newDes = myReplace(description, "awful", "beautiful")

function myReplace(curStr, oldSubStr, newSubStr) {
    var firstIndex = curStr.indexOf(oldSubStr)
    var secondIndex = firstIndex + oldSubStr.length
    return curStr.substring(0, firstIndex) + newSubStr + curStr.substring(secondIndex)
}

console.log("newDes: ", newDes)

// arrays

var numbers = [2, 3, 5, 4]
var names = ["Toai", "Linh", "Nhan", "Phong", 4]

var students = [{
            name: "Toai",
            age: 20
        },
        {
            name: "Linh",
            age: 18
        }
    ]
    // console.log("Numbers: ", numbers)
    // console.log("First Number: ", numbers[0])
    // numbers[0] = 10
    // console.log("First Number: ", numbers[0])
    // console.log("Last Number: ", numbers[numbers.length - 1])
    // console.log("names: ", names)
    // console.log("students: ", students)
    // var matrix = [
    //     [10, 10, 10, 10],
    //     [0, 0, 0, 0],
    //     [1, 10, 1, 5]
    // ]
    // for (var i = 0; i < matrix.length; i++) {
    //     for (var j = 0; j < matrix[i].length; j++) {
    //         console.log(`matrix[${i}][${j}]`, matrix[i][j])
    //     }
    // }

// function push(arr, value) {
//     arr[arr.length] = value
// }

// function pop(arr) {
//     var result = arr[arr.length - 1]
//     arr.length -= 1;
//     return result
// }

// var stack = []
// console.log("Stack: ", stack)
// stack.push(1)
// push(stack, 3)
// console.log("Stack: ", stack)
// stack.push(2)
// console.log("Stack: ", stack)
// var lastValue = pop(stack)
// console.log("lastValue: ", lastValue)
// console.log("Stack: ", stack);
// stack.unshift(0);
// console.log("Stack: ", stack);
// var firstValue = stack.shift();
// console.log("firstValue: ", firstValue);

// indexOf array
var numbers = [2, 3, 5, 4]
var names = ["Toai", "Linh", "Nhan", "Phong", 4]

var studentTruong = {
    name: "Truong",
    age: 21
}
var students = [{
        name: "Toai",
        age: 20
    },
    {
        name: "Linh",
        age: 18
    },
    studentTruong
]
console.log("indexOf(3): ", numbers.indexOf(3));
console.log("students: ", students)
console.log("indexOf({name: \"Linh\", age: 18})",
    students.indexOf({ name: "Linh", age: 18 }));
console.log("indexOf(studentTruong)",
    students.indexOf(studentTruong))
console.log("original numbers", numbers)
var cpNumbers = numbers.slice(0)
console.log("number.reserve()", cpNumbers.reverse())
    // numbers.reverse()
console.log("numbers", numbers);
// splice
// var subArray = numbers.splice(numbers.length - 2, 1);
var subArray = numbers.splice(0, 0, 1, 2, 1, 2, 1, 2, 0);
console.log("subArray: ", subArray)
console.log("numbers: ", numbers)
console.log("students: ", students)
console.log("join: ", numbers.join(", "))
var tags = ["reactjs", "html", "css"]
console.log("join: ", tags.join(" | "))

var result = ""
for (var i = 0; i < tags.length; i++) {
    if (i === tags.length - 1) {
        result += tags[i]
    } else {
        result += tags[i] + " | "
    }
}
console.log("result: ", result)

// callback functions
function helloWorld() {
    console.log("Hello world")
}

function say(callback) {
    callback()
    helloWorld()
}

say(helloWorld);

// bai 15
var name = "NguyeN THI tho tHu hA"
name = name.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
console.log("Name: ", name);
name = "NguyeN THI tho tHu hA"
var result = "";
for (var i = 0; i < name.length; i++) {
    if (i == 0 || name[i - 1] === " ") {
        result += name[i].toUpperCase()
    } else {
        result += name[i].toLowerCase()
    }
}
console.log("Result: ", result)