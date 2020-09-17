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

var maleIndex = 12
if (maleIndex > 10) {
    isMale = true;
}

// if
if (isMale) {
    // alert("Nhan is male")
}