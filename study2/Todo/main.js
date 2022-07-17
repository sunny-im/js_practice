// 1. 유저가 값을 입력
// 3. check 버튼을 누르면 할일에 밑 줄
// 5. tab 선택 시 언더바 이동
// 6. 진행중 탭은 진행중만, 완료탭은 완료만
// 7. 전체탭을 누르면 전체아이템으로 돌아오기

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let tabs = document.querySelectorAll(".taskTabs div")
let taskList = [];
let mode ="all";
let filterList = [];

// 2. + 버튼 클릭하면 할일 추가
addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        addTask();
    }
});

console.log(tabs);
for(let i = 1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(e){filter(e)})
}

function addTask() {
    let task = {
        id : randomId(),
        taskContent : taskInput.value,
        isComplete : false
    };
    taskList.push(task);
    console.log(taskList);
    taskInput.value = "";
    render();
}

// ui 보여주는애
function render() {
    let list = [];
    if(mode == "all"){
        list = taskList;
    } else if (mode == "ongoing" || mode =="done") {
        list = filterList;
    } 
    let resultHTML = "";
    for(let i=0; i<list.length; i++) {
        if(list[i].isComplete == true){
            // 3-2. ture면 밑줄
            resultHTML += `<div class="task taskDone">
            <span>${list[i].taskContent}</span>
            <div class="btnBox">
                <button onClick="toggleComplete('${list[i].id}')"><i class="fa fa-rotate-left"></i></button>
                <button onClick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>
            </div>
        </div>`
        } else {
        resultHTML += `<div class="task">
        <span>${list[i].taskContent}</span>
            <div class="btnBox">
                <button onClick="toggleComplete('${list[i].id}')"><i class="fa fa-solid fa-check"></i></button>
                <button onClick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>
            </div>
        </div>`;
        }
    }
    document.getElementById("taskBoard").innerHTML = resultHTML;
}

// 3-1. 버튼 클릭하면 isComplete이 false -> ture 
function toggleComplete(id) {
    console.log(id);
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            // 3-3. false면 다시 돌아가기
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    } 
    filter();
    console.log(taskList);
}

// 4. delete 버튼을 누르면 삭제
function deleteTask(id) {
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList.splice(i,1);
            break;
        }
    }
    filter();
    console.log(taskList);
}

function filter(e) {
    if (e){
        mode = e.target.id;
        underLine.style.width = e.target.offsetWidth + "px";
        underLine.style.left = e.target.offsetLeft + "px";
        underLine.style.top =
          e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
    }
    filterList = [];
    console.log("filter클릭됨",mode);
    if (mode =="ongoing") {
        for(let i=0; i<taskList.length; i++) {
            if(taskList[i].isComplete == false) {
                filterList.push(taskList[i]);
            }
        }
        //render();
        console.log(filterList);
    } else if (mode == "done") {
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete) {
                filterList.push(taskList[i]);
            }
        }
    }
    render();
}
function randomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}