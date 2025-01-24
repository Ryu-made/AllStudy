// const file = 'temp1.csv';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('file-csv');
  input.accept = '.csv,.txt';
  const btn = document.getElementById('upload-btn');
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
    Array.from(input.files).forEach((e, i) => {
      const fileinfo = appendDiv(container);
      fileinfo.className = 'file-output';
      const no = appendDiv(fileinfo);
      no.append(`#${i+1}`);
      const name = appendDiv(fileinfo);
      name.append(e.name);
      const size = appendDiv(fileinfo);
      size.append(
        e.size > GB ? `${Math.floor(e.size/GB)}GB` 
        : e.size > MB ? `${Math.floor(e.size/MB)}MB` 
        : e.size > KB ? `${Math.floor(e.size/KB)}KB` 
        : `${e.size}B`
      );
      const type = appendDiv(fileinfo);
      type.append(e.type);

      // console.log(`${i}: ${e.name}, ${e.size}`);
      
      if (e.size > MB*10) {
        console.log(`${no.textContent}: 파일 사이즈 10MB 초과`);
      } else {
        console.log(`${no.textContent}: 파일 사이즈 10MB 미만`);
      }
    });
  });
  // const temp = {name : [1, 2, 3]};
  // console.log(temp, typeof temp, temp['name'] === temp.name);
});

const KB = 2**10, MB = KB**2, GB = KB**3;