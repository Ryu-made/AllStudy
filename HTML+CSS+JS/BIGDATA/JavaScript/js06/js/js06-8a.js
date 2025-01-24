const url = 'https://www.snu.ac.kr/';
// naver.com 등은 CORS 보안 정책에 의해 크롤링시 에러가 발생함(서버(백엔드)에서 처리하는 것이 대부분 안전)
fetch(url).then(response => response.text())
  .then(data => {
    // 프론트에서 웹페이지 크롤링하기
    const parser = new DOMParser(); // 파싱 객체
    const doc = parser.parseFromString(data, 'text/html'); // html >> Document 객체
    const cardList = doc.querySelector('.board-index-img1');
    console.log(cardList);
    /****/

    const cardItems = cardList.querySelectorAll('.item');
    const main = document.createElement('main');
    document.body.appendChild(main);
    
    /* main 레이아웃 스타일 */
    main.style.display = 'grid';
    main.style.gap = '60px 20px';
    main.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 22vw))';
    main.style.margin = '24px 4% 10px';

    cardItems.forEach((item, index) => {
      /* DOM 요소 생성 */
      const section = document.createElement('section');
      const text = document.createElement('div');
      const title = document.createElement('span');
      const sub = document.createElement('span');
      const thumb = document.createElement('span');
      const img = document.createElement('img');

      /* main에 각각 붙이기 */
      main.appendChild(section).append(thumb, text);
      thumb.append(img);
      text.append(title, sub);

      /* 내용 */
      img.src = changeDomain(item.querySelector('.thumb img').src);
      img.alt = `image-${index}`;
      title.textContent = item.querySelector('.title').textContent;
      sub.textContent = item.querySelector('.sub').textContent;
      
      /* section 및 하위 요소 스타일 + 클래스 */
      section.style.display = 'flex';
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'flex-start';
      section.style.paddingBottom = '2rem';
      section.style.borderBottom = '1px dotted #aaa';
      section.style.minHeight = '720px';
      section.style.cursor = 'pointer';
      section.className = 'card-news';
      thumb.style.display = 'block';
      thumb.className = 'card-thumb';
      img.style.width = '100%';
      text.style.wordBreak = 'keep-all';
      title.style.display = 'block';
      title.style.fontSize = '1.5rem';
      title.style.fontWeight = '700';
      title.style.margin = '1rem 0';
      title.className = 'card-title';
      sub.style.display = 'block';
      sub.style.fontSize = '1.25rem';
      sub.style.color = '#aad';
      sub.className = 'card-sub';

      /* 클릭 이벤트로 페이지 이동 */
      section.addEventListener('click', () => {
        location.href = changeDomain(item.href);
      });
    });

  });

/* 문자열 반복 자르기(도메인 전환) 메소드 */
function changeDomain(string) {
  let res = string;
  let nth = 3;
  while (nth-- > 0) // nth번 반복
    res = res.slice(res.indexOf('/')+1);
  return url + res;
}