// 문

/* 1. if 문
 *  if (조건식) {
 *     실행 코드
 *  }
 *
 * 2. if-else 문
 *  if (조건식) {
 *     실행 코드
 *  } else {
 *     실행 코드
 *  }
 *
 * 3. if-elseif 문
 *  if (조건식) {
 *     실행 코드
 *  } else if (조건식) {
 *     실행 코드
 *  } else {
 *     실행 코드
 *  }
 */

// 1. if문 예시
console.log("== if문 예시 ==");
if (10 > 1) {
  console.log("10은 1보다 크다");
}
console.log("");

// 2. if-else문 예시
console.log("== if-else문 예시 ==");
const age = 16;

if (age > 19) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}
console.log("");

// 3. if-elseif문 예시
console.log("== if-elseif문 예시 ==");
const age2 = 7;

if (age2 > 19) {
  console.log("성인입니다.");
} else if (age2 > 7) {
  console.log("학생입니다.");
} else {
  console.log("유아입니다.");
}
console.log("");

/*
 * 4. for문
 *  for (선언; 조건; 증감) {
 *     실행코드
 *  }
 */

// for문 예시
console.log("== for문 예시 ==");
const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
