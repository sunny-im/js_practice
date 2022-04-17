function bDay() {
    var dDay = document.getElementById("myBday");
    var today = new Date();
    var birth = new Date("october 25,2022 0:00:00");
    var remain = birth.getTime() - today.getTime();
    var day = Math.ceil(remain/(1000*60*60*24));
    var hour = Math.ceil(remain%(1000*60*60*24) / (1000*60*60));
    var min = Math.ceil(remain%(1000*60*60) / (1000*60));
    var sec = Math.ceil(remain%(1000*60) / 1000);
    

    dDay.innerHTML = (day + "일 " + hour + "시간 " + min + "분 " + sec + "초 " + " 남았습니다." +"<br>"+"두둥 !!");
}

bDay();
setInterval(bDay,1000);