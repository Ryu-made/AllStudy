const url = 'https://www.snu.ac.kr/';
// naver.com 등은 CORS 보안 정책에 의해 에러가 발생함(서버에서 처리하는 것이 대부분 안전)
fetch(url).then(response => response.text())
  .then(data => {
    const parser = new DOMParser(); // 파싱 객체
    const doc = parser.parseFromString(data, 'text/html'); // html >> Document 객체
    const cardList = doc.querySelector('.board-index-img1');
    console.log(cardList);
    const cardItems = cardList.querySelectorAll('.item');
    cardItems.forEach((item, index) => {
      /* DOM 요소 */
      const section = document.createElement('section');
      const title = document.createElement('span');
      const sub = document.createElement('span');
      /* body에 각각 붙이기 */
      document.body.appendChild(section).append(title, sub);

      /* 내용 */
      title.textContent = `${index} : ${item.querySelector('.title').textContent}`
      sub.textContent = item.querySelector('.sub').textContent;
      
      /* 스타일 + 클래스 */
      section.style.paddingLeft = '3rem';
      section.style.margin = '1rem 0.5%';
      section.style.background = '#fdf2fd';
      section.style.cursor = 'pointer';
      section.className = 'section-news';
      title.style.display = 'block';
      title.style.fontSize = '2rem';
      title.style.fontWeight = '700';
      title.className = 'title';
      sub.style.display = 'block';
      sub.style.fontSize = '1.25rem';
      sub.className = 'sub';
      /* 클릭 이벤트로 페이지 이동 */
      section.addEventListener('click', () => {
        let path = item.href;
        console.log(path);
        /* live server 자르고 서울대 도메인 붙이기 */
        location.href = url + nthSliced(path, '/', 3);
      });
    });

  });

  /* 문자열 반복 자르기 메소드 */
  function nthSliced(string, sub, nth) {
    let res = string;
    while (nth-- > 0) // nth번 반복
      res = res.slice(res.indexOf(sub)+1);
    return res;
  }