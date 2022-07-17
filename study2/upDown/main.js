let randomNum = 0;
let goBtn = document.getElementById("goBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let history = [];

//2. 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
goBtn.addEventListener("click",play);  // 함수도 변수로 넣을 수 있다~
//7. reset 버튼을 누르면 게임 리셋
resetBtn.addEventListener("click",reset);
userInput.addEventListener("focus", function() { // 재사용이 없어서 그냥 익명함수로 작성
    userInput.value = "";
})

function pickRandomNum() {
    // 1. 랜덤번호 1~100 지정 
    randomNum = Math.floor(Math.random()*100)+1;  // Math.random() 0~1 사이의 랜덤 숫자를 뽑아주는 함수
    console.log("정답" , randomNum);
}

function play() {
    let userValue = userInput.value;

    //9. 유저가 1-100 범위 밖에 숫자를 입력하면 알려주기. 기회는 그대로~ (유효성검사)
    if(userValue<1 || userValue>100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요!!"
        return;
    }

    //10. 유저가 이미 입력한 숫자를 입력하면 알려주기. 역시 기회는 그대로~(유효성검사2)
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
        return;
    }

    //8. 5번의 기회를 다쓰면
    chances --;
    chanceArea.textContent = `남은 기회 : ${chances}번`
    console.log("남은기회는 ", chances)

    if(userValue < randomNum) { // 3. 랜덤번호 > 유저번호 => Up!
        resultArea.textContent = "UP!!"  // 6. resultArea에 텍스트를 이걸로 바꿀꺼야!
        console.log("up!");
    } else if (userValue > randomNum) { // 4. 랜덤번호 < 유저번호 => Down!
        resultArea.textContent = "DOWN!!"
        console.log("down!");
    } else { //5. 만약 유저가 랜덤번호를 맞추면, 맞췄습니다!
        resultArea.textContent = "정답!!!!!!"
        userInput.value = "";
        chanceArea.textContent = "";
        console.log("정답!");
        gameOver = true;
    }

    history.push(userValue);  // 유저가 입력한 값 배열에 넣기
    console.log(history)

    //9. 게임 종료 (go 버튼 비활성화)
    if (chances < 1) {
        gameOver = true
    }
    if (gameOver == true) {
        goBtn.disabled = true;
    }
}

function reset() {
    // userInput창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성
    pickRandomNum();
    resultArea.textContent = "결과는 ??"
}
pickRandomNum()