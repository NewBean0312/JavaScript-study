// 문자열을 선언하는 방식
const word = '문자';
const word2 = "문자2";
const word3 = `문자3`;

// 출력
console.log(word[0]); // 문
console.log(word[1]); // 자
console.log(word[2]); // undefined (더 이상 없어서 undefoned가 출력됨)

// 문자의 길이 출력
console.log(word.length); // 2

// 문자열끼리 더할 수도 있음
const words = word2 + word3;

console.log(words) // 문자2문자3