// const file = 'temp1.csv';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('check-btn');
  const btnAct = () => { btn.disabled = false };
  const btnUnact = () => { btn.disabled = true };
  let cnt = 0;

  const input = document.getElementById('file-csv');
  input.accept = '.csv,.txt';
  const appendDiv = parent => parent.appendChild(document.createElement('div'));
  const container = appendDiv(document.body);
  container.className = 'container';
  const subject = appendDiv(container);
  subject.className = 'file-output subject';
  const subno = appendDiv(subject);
  subno.append(`NO`);
  const subname = appendDiv(subject);
  subname.append(`File Name`);
  const subsize = appendDiv(subject);
  subsize.append(`Size`);
  const subtype = appendDiv(subject);
  subtype.append(`Type`);

  btn.addEventListener('click', () => {
    alert('버튼 활성화됨');
  });

  input.addEventListener('change', () => {
    /*
    if (input.files[0].type == 'text/plain')
      input.files[0].type = 'text/csv';
    */
    // const arr = Array.from(input.files);
    // console.log(input.files, typeof input.files);
    // console.log(arr, typeof arr, typeof new Array());
    /*
    --console에 다른 형식으로 출력하기
    console.info(input);
    console.dir(input);
    console.info(input.files);
    console.dir(input.files);
    console.error(input);
    */
    // for (el of document.querySelectorAll('.file-output'))
    //   container.removeChild(el);

    Array.from(input.files).some(e => {
      const textSizing = e.size > GB ? `${Math.floor(e.size / GB)}GB`
        : e.size > MB ? `${Math.floor(e.size / MB)}MB`
          : e.size > KB ? `${Math.floor(e.size / KB)}KB`
            : `${e.size}B`
      if (e.size > MB * 10) {
        alert(`파일 용량 초과입니다. [${textSizing}]`);
        // container 비우기 + cnt = 0
        return 1;
      }
      const fileinfo = appendDiv(container);
      fileinfo.className = 'file-output';
      const no = appendDiv(fileinfo);
      no.append(`#${++cnt}`);
      const name = appendDiv(fileinfo);
      name.append(e.name);
      const size = appendDiv(fileinfo);
      size.append(textSizing);
      const type = appendDiv(fileinfo);
      type.append(e.type/*.slice(e.type.indexOf('/')+1)*/);

      // console.log(`${i}: ${e.name}, ${e.size}`);
      /*
      if (e.size > MB*10) {
        console.log(`${no.textContent}: 파일 사이즈 10MB 초과`);
        btnUnact();
        return 1;
      } else {
        console.log(`${no.textContent}: 파일 사이즈 10MB 미만`);
        btnAct();
        return 0;
      }
      */
    });

  });
});

const KB = 2 ** 10, MB = KB ** 2, GB = KB ** 3;