// parseFloat:
// 문자열 인수를 부동 소숫점 숫자로 해석하고 반환한다.
console.log(`
parseFloat('3.142'): ${parseFloat('3.142')}
parseFloat('120'): ${parseFloat('120')}
parseFloat('40.000'): ${parseFloat('40.000')}
parseFloat('34 35 36'): ${parseFloat('34 35 36')}
parseFloat('20 century'): ${parseFloat('20 century')}
parseFloat('century 20'): ${parseFloat('century 20')}
parseFloat(' 45 '): ${parseFloat(' 45 ')}
`);

// parseInt:
// 문자열 인수를 정수로 해석하고 반환한다.
// - 문자열을 해석할 진수를 함께 넣을 수 있다.
// - 두번째 인수에 따라 첫번째 문자열 인수가 올바른 진수로 해석할 수 없다면
// 해석하지 못한 문자부터 무시되어 반환한다. 
// (ex. 1012^(2): 5 >> 2를 무시하고 반환함)
console.log(`-인수 1개-
parseInt('11'): ${parseInt('11')}
parseInt('11.23'): ${parseInt('11.23')}
parseInt(11): ${parseInt(11)}
parseInt(11.23): ${parseInt(11.23)}
-인수 2개-
parseInt('1021', 10): ${parseInt('1021', 10)};
parseInt('1021', 2): ${parseInt('1021', 2)};
parseInt('1021', 4): ${parseInt('1021', 4)};
parseInt('1021', 8): ${parseInt('1021', 8)};
parseInt('1021', 16): ${parseInt('1021', 16)};
`);