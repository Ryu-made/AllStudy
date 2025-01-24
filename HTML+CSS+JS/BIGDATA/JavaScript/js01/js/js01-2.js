const input = prompt('당신의 이름을 입력하세요.', '김땡땡');
const check = confirm('당신의 이름은 ' + input + '님 입니다. 맞습니까?');
if (check) {
  const list = '<p style="color: white; background: blue; display: inline-block; padding: 0.5rem 4rem"> 날씨가 추워지고 있습니다. 옷 따뜻하게 잘 입으시길 바랍니다^^</p>';
  document.write(list);
}