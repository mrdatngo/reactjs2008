let inputName = document.querySelector(".weather .name")
let inputTemp = document.querySelector(".weather .temp")
console.log(inputName, inputTemp)
function loadData(apiUrl) {
    return new Promise((resolve) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //    document.getElementById("demo").innerHTML = this.responseText;
                let data = this.responseText
                var objData = JSON.parse(data)
                // console.log("Data: ", objData, typeof(objData), objData.main.temp, objData.name);
                resolve(objData)
            }
        };
        xhttp.open("GET", apiUrl, true);
        xhttp.send();
    })
}

let apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=23.3&lon=105.3&appid=c7055ce01673bc05bf8af1cb09e60bd2"
loadData(apiUrl).then(data => {
    console.log("DATA: ", data)
    inputName.value = data.name
    inputTemp.value = data.main.temp
})
