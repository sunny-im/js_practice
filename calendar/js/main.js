const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent=`${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear , viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth+1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();
// 리턴값은 0-7로 일월화수목금토일 순서

const TLDate = thisLast.getDate();
console.log("TLDate는"+TLDate);
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1); 
// ...는 ES6에 추가된 spread 확산 연산자,  arr.keys()는 배열의 인덱스 ,  slice(시작점 인덱스)
console.log("thisDates는"+thisDates);
const nextDates = [];

// 
const test =Array(31);
const test2 = test.keys();
console.log("test는"+test);

// 

if(PLDay !==6) { // 지난달 마지막요일이 토요일이면 달력에 적을 필요 없으니...
    for (let i=0; i<PLDay+1; i++) {
        prevDates.unshift(PLDate - i);   // unishift(); 배열의 앞에 아이템 추가
    }
}

for (let i = 1; i < 7 - TLDay; i++) {
nextDates.push(i);  // push(); 배열의 끝에 요소 추가
}

const dates = prevDates.concat(thisDates, nextDates); // concat(); 파라미터로 받은 배열이나 값들을 기존 배열에 합쳐서 새로운 배열을 만든다.
console.log(dates);

dates.forEach(function(date,i) {            // foreach(배열의 아이템,배열의 index)
    dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');

document.querySelector('.go-today').addEventListener('click',function(e){
    
})
