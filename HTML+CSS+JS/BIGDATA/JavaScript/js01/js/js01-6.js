document.write('<h2>환율계산기</h2>');
const dollar = prompt('환전할 달러를 입력하세요');
if (dollar > 0) {
  const ex = 1400;
  const won = dollar * ex;
  const list = `<p style="color: blue;">환전하실 ${dollar}달러는 ${won}원 입니다.</p>`;
  document.write(list);
} else if (dollar <= 0) {
  const list1 = `<p style="color: red;">양수를 입력해야합니다. (${dollar})</p>`;
  document.write(list1);
} else {
  const list2 = `<p style="color: red;">입력 형식이 올바르지 않습니다. (${dollar})</p>`;
  document.write(list2);
}
