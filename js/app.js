// CODE EXPLAINED channel

// 요소 선택
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list  = document.getElementById("list");
const input  = document.getElementById("input");

// 동적 클래스
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// 변수 선언
let LIST, id;

// 로컬스토리지 get 데이터
let data = localStorage.getItem("TODO");

// 빈데이터 체크
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else{
    LIST = [];
    id = 0;
}

// 아이템 로드
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear 로컬스토리지
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// 날짜 표기
const options = {weekday: "long", month: "short", day:"numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("ko-KR", options)

// Todo Function
function addToDo(toDo, id, done, trash){

    if(trash){ return; }; //??

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
            <i class="fa ${DONE} co" job="complete" id="${id}"></i>
            <p class="text ${LINE}">${toDo}</p>
            <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
        </li>
        `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// 할일 추가
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        // 빈 값이 아니면..
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            // 로컬스토리지 add 데이터
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
})

// 완료 버튼
function completeToDo(element){
    element.ClassList.toggle(CHECK);
    element.ClassList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// 삭제 버튼
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    const element = event.target;
    //console.log(element.job.value);
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    } else if(elementJob == "delete"){
        removeToDo(element);
    }

    // 로컬스토리지 add 데이터
    localStorage.setItem("TODO", JSON.stringify(LIST));
})

