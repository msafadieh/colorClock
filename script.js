getTime()
window.setInterval(function(){
    getTime();
}, 1000);

function addZero(theTime) {
    if (theTime < 10) {
        return '0' + theTime;
    }
    else {
        return theTime;
    }
}

function getTime() {
    var date = new Date();
    var seconds = addZero(date.getSeconds());
    var minutes = addZero(date.getMinutes());
    var hour = addZero(date.getHours());
    var color = '\#'+hour+minutes+seconds;
    document.body.style.background = color;
    document.getElementById('time').innerHTML=color;
}