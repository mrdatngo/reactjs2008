// callback

function hello() {
    console.log("Hello")
}

function say(callback) {
    callback()
}

say(hello);

// arrays

var names = [ "aNga", "Tuyen", "Linh", "Nhan", "Hung", "Thai"]

function findNameStartByN(name) {
    console.log("Name: ", name)
    return name[0] === "N"
}

var result = names.find(findNameStartByN)
console.log("Result: ", result);

var numbers = [1, 3, 4, 5, 7, 6, 10, 11, 20];
// use find, search the first even number

function findEvenNumber(number, index, array) {
    // console.log("Number:",number, index, array);
    return number % 2 === 0
}

// var firstEven = numbers.find(number => number % 2 == 0)
var firstEven = numbers.find(findEvenNumber)
console.log("firstEven: ", firstEven);

// myFind - fake array.find()
var myFind = (array, callback) => {
    for(var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i]
        }
    }
}
console.log(myFind(numbers, findEvenNumber))

// filter
var filterAllEvenNumber = (number) => {
    return number % 2 === 0;
}

var resultsEvenNumbers = numbers.filter(findEvenNumber)
console.log("Result Event Numbers: ", resultsEvenNumbers)

// map
var students = [
    {
        firstName: "Nguyen Thi",
        lastName: "Nga",
        age: 20      
    },
    {
        firstName: "Ha Huy",
        lastName: "Tuyen",
        age: 21
    },
    {
        firstName: "Nguyen",
        lastName: "Linh",
        age: 18
    }
]
// triết xuất array gồm full name của các học sinh
var fullNames = []
for(var i = 0; i < students.length; i++) {
    fullNames.push(students[i].firstName + " " + students[i].lastName)
}
console.log("FullNames: ", fullNames)

var fullNames2 = students.map(item => 
    item.firstName + " " + item.lastName);
console.log("fullNames2", fullNames2)

// export an array contain list of student with full name 
// and age > 20
// Expected:
// [
//     {
//         firstName: "Nguyen Thi",
//         lastName: "Nga",
//         fullName: "Nguyen Thi Nga",
//         age: 20      
//     },
//     {
//         firstName: "Ha Huy",
//         lastName: "Tuyen",
//         fullName: "Ha Huy Tuyen",
//         age: 21
//     }
// ]

var results = students
                .filter(student => student.age >= 20)
                .map(
                    student => {
                        return {
                            age: student.age,
                            fullName: student.firstName + " " + student.lastName
                        }
                    }
                )
// results = results.map(student => {
//     return {
//         age: student.age,
//         fullName: student.firstName + " " + student.lastName
//     }
// })

console.log("results:", results)

// reduce
var numbers = [1, 2, 3, 5, 6]
// calculate total of array numbers
var total = numbers.reduce((sum, value) => {
    console.log("sum, value:", sum, value)
    return sum + value
}, 0)
console.log("total: ", total)

// calculate quantity of odd number
// solution 1: use filter
console.log("quantity: ", numbers.filter(number => 
    number % 2 === 1).length
)

// solution 2: use reduce
var quantityOddNumbers = numbers.reduce((quantity, value) => {
    console.log("quantity:", quantity, value)
    if (value % 2 === 1) {
        quantity += 1
    }
    return quantity
}, 0)
console.log("quantityOddNumbers: ", quantityOddNumbers)

// handle with DOM
var h2Component = document.getElementById("h2")
console.log("h2Component: ", h2Component)
h2Component.style.backgroundColor = "red"
