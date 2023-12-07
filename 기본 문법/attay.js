/*
 * 배열
 *  - 배열은 0부터 시작함
 *  - 배열은 불변하지 않음
 */

const data = "a";
const num = 0;
const boolean = true;

const arr = [data, num, boolean, "name"];

console.log(arr[0]); // a
console.log(arr[1]); // 0
console.log(arr[2]); // true
console.log(arr[3]); // name

// 배열값 추가
arr[4] = "Test";
console.log(arr[4]); // Test

// 배열값 수정
arr[0] = "첫번째";
arr[1] = "Second";
console.log(arr); // [ '첫번째', 'Second', true, 'name', 'Test' ]

// 배열관련 매서드
arr.push('마지막'); // 요소를 마지막에 집어넣는 메서드
arr.unshift('첫번째 또 추가') // 요소를 처음에 집어넣는 메서드

console.log(arr); // [ '첫번째 또 추가', '첫번째', 'Second', true, 'name', 'Test', '마지막' ]