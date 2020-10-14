// var h3 = document.getElementById("h3")

var parent = document.getElementById("parent")
var h3_2 = parent.getElementsByTagName("h3")[0]

console.log("h3_2", h3_2)

// h3.style.color = "red"
h3_2.style.color = "blue"
h3_2.style.backgroundColor = "yellow"

var p = document.getElementsByClassName("hello")[0]
p.style.color = "yellow"

var data = "<span style='color: red'> Hello </span> change by js <script>alert('Hello')</script>"
// p.innerHTML = data
p.innerText = data