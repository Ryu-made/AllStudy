console.log('1번 출력'); // 가장 먼저 출력
setTimeout(() => console.log('2번 출력'), 5000); // 지연 시간이 긴 쪽이 나중에 출력
setTimeout(() => console.log('3번 출력'), 3000);
setTimeout(() => console.log('4번 출력'), 1000);
setTimeout(() => console.log('5번 출력')); // 지연 시간 중 가장 빨리 출력
console.log('6번 출력'); // 가장 먼저 출력