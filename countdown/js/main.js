const dDay = document.getElementById("myBday");
const record_ul = document.getElementById("record_ul");


function bDay() {
    let today = new Date();
    let birth = new Date("october 25,2022 0:00:00");
    let remain = birth.getTime() - today.getTime();
    let day = Math.ceil(remain/(1000*60*60*24));
    let hour = Math.ceil(remain%(1000*60*60*24) / (1000*60*60));
    let min = Math.ceil(remain%(1000*60*60) / (1000*60));
    let sec = Math.ceil(remain%(1000*60) / 1000);
    
    let result = day + "일 " + hour + "시간 " + min + "분 " + sec + "초 " + " 남았습니다." +"<br>"+" "
    dDay.innerHTML = result;
}

bDay();
setInterval(bDay,1000);

let click = document.getElementById("click");
click.addEventListener('click', record);

function record() {
    const record_li = document.createElement("li");
    record_li.innerHTML = dDay.innerHTML;
    
    // record_ul.appendChild(record_li); //새로운 노드를 해당 노드의 자식 노드 리스트의 맨 마지막에 추가(태그를 만들고 태그를 추가 할 때 사용)
    record_ul.append(record_li); // record_ul(부모)태그 가장 뒤에 record_li
    record_ul.prepend(record_li); // record_ul(부모)태그 가장 앞에 record_li
}

document.getElementById("reset").addEventListener('click',function(){
    document.getElementById("record_ul").remove();
});

