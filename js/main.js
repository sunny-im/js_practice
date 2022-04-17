
function getTime(){
    var timeNow = document.getElementById("realTime");
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    timeNow.innerHTML = "지금은 " + hour + "시 " + min + "분 " + sec + "초 입니다 :) ";
}

getTime();
setInterval(getTime,1000);