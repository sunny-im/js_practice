
function getTime(){
    var timeNow = document.getElementById("realTime");
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    timeNow.innerHTML = "지금은 " + hour + "시 " + min + "분 " + sec + "초 입니다 :) ";
}

function convertTime(time){
    return time < 10 ? `0${time}` : time    // 리터럴함수
}

getTime();
setInterval(getTime,1000);
// setInterval : 주기적으로 인자를 실행하는 함수
// setTimeout : 일정시간이 지난 후 인자로 받은 함수를 실행