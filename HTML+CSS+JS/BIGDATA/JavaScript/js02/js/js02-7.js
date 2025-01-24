// 문서속성
document.addEventListener('DOMContentLoaded', () => {
  for(let i = 0; i < 5; i++) {
    // img 태그 추가
    document.body.appendChild(document.createElement('img'));
  }
  // img 선택자
  const imgs = document.querySelectorAll('img');
  // img 선택자 출력
  console.log(imgs);

  for(const img of imgs) {
    // cats 클래스 추가
    img.classList.add('cats');
  }
  // img 선택자 출력
  console.log(imgs);

  // .cats 선택자
  const cats = document.querySelectorAll('.cats');
  // forEach()
  cats.forEach((cat, index) => {
    width = (index + 1) * 100;
    // .cats 요소에 src 속성값 부여
    cat.src = `https://placecats.com/${width}/400`;
    // src 속성값 출력
    console.log(cat.src);
  });
});