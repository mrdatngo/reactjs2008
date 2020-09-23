// data types
var helloStr = "Xin chào"
var hello_str = "Hello class (hello_str)"
var _hello = "Hello class (hello_str)"
var className = "ReactJS"
var isMale = false
var myObject = {}
var helloClass = helloStr + ", " + className

var myNumber = 15
var myFloat = "15.5"
var totalNumber = (((myNumber + myFloat) * 3) - 4)*2
var minusNumber = myNumber * myFloat

console.log(helloClass, typeof(helloClass))
console.log("totalNumber", totalNumber, typeof(totalNumber))
console.log("minusNumber", minusNumber, typeof(minusNumber))

console.log(helloStr, typeof(helloStr))
console.log(myNumber, typeof(myNumber))
console.log(myFloat, typeof(myFloat))
console.log(isMale, typeof(isMale))
console.log(myObject, typeof(myObject))
className = ""
console.log("!className", !!className, typeof(!!className))

var maleIndex = 0
if (maleIndex > 10) {
    isMale = true;
}

// if conditions
if (false || true) {
    // alert("True")
} else {
    // alert("False")
}

// mark
var mark = 7;
/*
[8, 10] hoc sinh gioi
[7, 8) hoc sinh kha
[5, 7) hoc sinh tb
[0, 5) hoc sinh yeu
*/
// if (mark > 10 || mark < 0) {
//     alert("Mark is not valid!")
// } else if (mark >= 8) {
//     alert("Hoc sinh gioi")
// } else if (mark >= 7) {
//     alert("Hoc sinh Kha")
// } else if (mark >= 5) {
//     alert("Hoc sinh tb")
// } else {
//     alert("Hoc sinh yeu")
// }

// switch case
var name = "Nhan"
// if (name == "Nhan") {
//     alert("Hoc sinh is Nhan")
// } else if (name == "Linh") {
//     alert("Hoc sinh is Linh")
// } else if (name == "Tuyen") {
//     alert("Hoc sinh is Tuyen")
// } else {
//     alert("Unknown!")
// }
// => switch case
// switch(name) {
//     case "Nhan":
//         alert("Hoc sinh is Nhan");
//         break;
//     case "Linh":
//         alert("Hoc sinh is Linh");
//         break;
//     case "Tuyen":
//         alert("Hoc sinh is Tuyen");
//         break;
//     default:
//         alert("Unknown!")
// }
// var month = 5;
// switch(month) {
//     case 1:
//     case 2:
//     case 3:
//         alert("Spring");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert("Summer");
//         break;
// }

// for
// for(var numberOfRound = 0;numberOfRound < 10; numberOfRound++) {
//     alert("Im finished rounds: " + numberOfRound)
// }
// while
// var numberOfRound = 0;
// while(numberOfRound < 10) { // infinity loop
//     alert("Loop: " + numberOfRound);
//     numberOfRound++;
// }
// do while
// var numberOfRound = 0;
// do {
//     alert("Loop: " + numberOfRound);
//     numberOfRound++;
//     if (numberOfRound == 5) {
//         break;
//     }
// } while(numberOfRound < 10);

// // get input number
// var inputNumber = prompt("Enter your number", 0)
// alert("InputNumber: " + inputNumber);

// loop
// check if is number
// loop: condition
// var inputNumber;
// do {
//     var strNumber = prompt("Enter your number", 0)
//     if (strNumber !== "") {
//         inputNumber = Number(strNumber);
//     } else {
//         inputNumber = NaN
//     }
    
// } while(isNaN(inputNumber)) // while inputNumber is number

// console.log("inputNumber: ", inputNumber, ", type:", typeof(inputNumber))
// alert("Number: " + inputNumber +
//         ", typeof: " + typeof(inputNumber));

// if (inputNumber % 2 == 1) {
//     alert("Number is odd")
// } else {
//     alert("Number is even")
// }
// // check prime number
// var isPrime = true;
// if (inputNumber < 2) {
//     isPrime = false;
// }
// if (isPrime) {
//     for(var i = 2; i <= Math.sqrt(inputNumber); i++) {
//         if (inputNumber % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     window.alert(inputNumber + " is prime number")
// } else {
//     window.alert(inputNumber + " is not prime number")
// }

// functions

// function isPrime(number) {
//     var isPrime = true;
//     if (number < 2) {
//         isPrime = false;
//     }
//     if (isPrime) {
//         for(var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     // if (isPrime) {
//     //     alert("Prime")
//     // }
//     return isPrime;
// }

// var isPrimeNumber = isPrime(5)
// alert(isPrimeNumber)
// if (isPrimeNumber) {
//     alert("5 is prime number");
// }

// function hello(name, from) {
//     alert("Hello " + name + ", I'm " + from)
// }

// hello("Class", "Teacher")
// hello("World", "Developer")
// hello("My Friends", "Tester")

function changeNumber() {
    number = 3
}

function changeName(name) {
    name = "Linh"
}

function changeStudent(student) {
    student.name = "Van Tuyen"
}

var number = 5;
var name = "Nhan";
var tuyen = {
    name: "Tuyen",
    age: 20
}

var nga = tuyen;
nga.name = "Nga";
console.log("Nga: ", nga);
console.log("Tuyen: ", tuyen);

changeNumber(number);
changeName(name);
changeStudent(tuyen);
console.log("Number: ", number);
console.log("Name: ", name);
console.log("Student: ", tuyen);