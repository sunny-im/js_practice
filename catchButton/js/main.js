const mouse = document.getElementById("clickBtn");
const box = document.getElementById("box");
mouse.addEventListener('mouseover', move);

function move() {
    loc = Math.floor(Math.random() * 500) + 1;
    box.style.top = loc;
    console.log(loc);
    // loc = Math.floor(Math.random() * 500) + 1;
    // box.style.bottom = loc;
    // loc = Math.floor(Math.random() * 500) + 1;
    // box.style.left = loc;
    // loc = Math.floor(Math.random() * 500) + 1;
    // box.style.right = loc;
}

mouse.addEventListener('click',function(){
    alert("잡혔다!!");
});
