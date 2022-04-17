function bDay() {
    var dDay = document.getElementById("myBday");
    var today = new Date();
    var birth = new Date(2022,09,25);
    var remain = birth.getTime() - today.getTime();
    var day = Math.ceil(remain/(1000*60*60*24));

    dDay.innerHTML = (day + "일" + " 남았습니다 두둥 !!");
}

bDay();
setInterval(bDay,1000);