var check

var month = new Date().getMonth()
let monthW
if (month == 0) {
    monthW = "Jan"
}
if (month == 1) {
    monthW = "Feb"
}
if (month == 2) {
    monthW = "Mar"
}
if (month == 3) {
    monthW = "Apr"
}
if (month == 4) {
    monthW = "May"
}
if (month == 5) {
    monthW = "Jun"
}
if (month == 6) {
    monthW = "Jul"
}
if (month == 7) {
    monthW = "Aug"
}
if (month == 8) {
    monthW = "Sep"
}
if (month == 9) {
    monthW = "Oct"
}
if (month == 10) {
    monthW = "Nov"
}
if (month == 11) {
    monthW = "Dec"
}

var date = new Date().getDate() + 1
var year = new Date().getFullYear()
var time = new Date().getTime()
var dH = new Date().getHours() + 24
var dM = new Date().getMinutes()
var dS = new Date().getSeconds()

// if(dH >= 24){
//     dH -= 24
// }

let add
if(dM < 60){
    add = 60 - dM
    dM += add
}
if(dS < 60){
    add = 60 - dS
    dS += add
}


var vertificationDate = new Date(monthW + " " + date + "," + " " + year + " " + time)

var x = setInterval(function () {
    var nowH = new Date().getHours()
    var nowM = new Date().getMinutes()
    var nowS = new Date().getSeconds()
    var text = document.getElementById("timeLeft")




    var hourDif = dH - nowH
    var minDif = dM - nowM
    var secDif = dS - nowS

    



    // var days = Math.floor(dis / (1000 * 60 * 60 * 24))
    // var hours = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // var minutes = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60))
    // var seconds = Math.floor((dis % (1000 * 60)) / 1000)

    // console.log( hourDif + ":" + minutes + ":" + seconds)

    text.innerHTML = "You will receive an email in " + hourDif + "hrs" + " " + minDif + "min and " + secDif + "s"

    if(hourDif < 0 && minDif < 0 && secDif < 0){
        text.innerHTML = "You should have had recieved an email by now. please check your Spam Folder."
    }


})

check = true


function countDownStart(){
    alert("1st Registration Phase Completed Succecfully.")
}