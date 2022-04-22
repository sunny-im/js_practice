const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener('mouseover', move);

let x=0;
let y=0;
function move() {
    x = Math.floor(Math.random() * 1000) + 1;  // Random-Functions Math.floor(Math.random() * Max) + Min
    y = Math.floor(Math.random() * 1000) + 1; 
    clickBtn.style.top = x+'px';
    //clickBtn.style.top = -x+'px';
    clickBtn.style.left = y+'px';
    //clickBtn.style.left = -y+'px';
}

clickBtn.addEventListener('click',function(){
    alert("잡혔다!!");
});
