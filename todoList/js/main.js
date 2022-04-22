const item = document.getElementById('item');
const btn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

btn.addEventListener('click',addItem);
item.addEventListener('keyup', function(e) {
    // 키 번호 확인하기 (엔터는 13번)
    // console.log(e.keyCode);
    if(e.keyCode === 13) addItem();
});

function addItem() {
    const li = document.createElement("li");
    const xbtn = document.createElement("button");
    // close (X) 버튼
    xbtn.className= 'close';
    xbtn.innerHTML='&times;';
            
    xbtn.onclick = function(e) {
        // 이벤트가 발생한 li 요소를 구해서 ul 요소에서 제거
        let pnode = e.target.parentNode;
        todoList.removeChild(pnode);
    }
    
    // li 요소 구성
    li.innerHTML = item.value;
    li.append(xbtn);
    // ul 요소에 li 요소 추가
    todoList.append(li);
    todoList.prepend(li);
    
    // console.log(todoList);
    // console.log(li);
    
    // 입력칸 비우기 및 포커스 이동
    item.value = '';
    item.focus();
}

