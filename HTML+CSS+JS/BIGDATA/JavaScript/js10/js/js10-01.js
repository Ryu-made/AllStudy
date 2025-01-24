const today = new Date(Date.now());
const storeKey = `task_${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
document.addEventListener('DOMContentLoaded', () => {

  qs('.btn-add') // 추가하기 버튼
    .addEventListener('click', // 클릭 이벤트
      () => addTask(qs('#input-task'))); // 할일 추가 함수 호출
  qs('.btn-del-completed') // 완료 항목 제거 버튼
    .addEventListener('click', // 클릭 이벤트
      () => deleteTask(qsa('.item.checked'))); // 완료항목 제거 함수 호출
  qs('.btn-del-all') // 전체 항목 제거 버튼
    .addEventListener('click', // 클릭 이벤트
      () => deleteTaskAll()); // 전체 항목 제거 함수 호출

  qsa('.item').forEach(e => {
    e.addEventListener('click', () => {
      e.classList.toggle('checked'); // 목록에 checked 클래스 추가/제거
    });
    /*
    const checkItem = document.createElement('input');
    checkItem.type = 'checkbox';
    i.appendChild(checkItem);
    i.addEventListener('click', () => {
      checkItem.checked =!checkItem.checked;
    });
    */

  });
  let item;
  if (item = localStorage.getItem(storeKey)) {
    // 스토리지에 이미 저장된 할일 목록 가져오기 실행
  } else {
    localStorage.setItem(storeKey, {}); // 스토리지에 새로운 오브젝트(빈칸) 생성
  }

});



function addTask(input) {
  const taskText = input.value.trim();
  if (taskText) {
    const task = qs('.list-task').appendChild(document.createElement('li'));
    task.classList.add('item');
    task.textContent = taskText;
    task.addEventListener('click', () => task.classList.toggle('checked')); // 목록에 checked 클래스 추가/제거
    localStorage.setItem(`task${index++}`, taskText); // 로컬 스토리지에 할일 순번(index) 매기기
    input.value = null;
  }
}

function deleteTask(checked) {
  index -= index < checked.length ? index : checked.length;
  checked.forEach(e => {
    e.parentNode.removeChild(e);
    localStorage.removeItem(`task${e.dataset.index}`);
  });
}

function deleteTaskAll() {
  localStorage.clear();
  qs('.list-task').innerHTML = null;
  index = 0;
}

function qs(t) { return document.querySelector(t); }
function qsa(t) { return document.querySelectorAll(t); }
let index = 0;