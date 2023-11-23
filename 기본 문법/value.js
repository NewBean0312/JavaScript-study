// 1. 원시값
// undefined
const un = undefined;

// null
const nu = null;

// boolean
const bool = false;

// number
const num = 0;

// string
const str = "문자열";

console.log(typeof un); // undefined
console.log(typeof nu); // object
console.log(typeof bool); // boolean
console.log(typeof num); // number
console.log(typeof str); // string

// 2. 원시 값이 아닌 데이터 타입은 즉, 래퍼런스, 객체 타입!
const obj = {
  name: "Kim",
};

const arr = ["Kim"];

function func() {
  return "Kim";
}

console.log(typeof obj); // object
console.log(typeof arrnum); // object
console.log(typeof func); // function

/*
 *  3. 동등 연산자를 사용할 때
 *  엄격한 비교 => ===
 *  느슨한 비교 => ==
 */
const aaa = 0;

if (aaa == 0) {
    console.log("aaa는 0입니다.");
} else {
    console.log("aaa는 0이 아닙니다.");
}
// 결과 : aaa는 0입니다.

const bbb = '0';

if (bbb === 0) {
    console.log("bbb는 0입니다.");
} else {
    console.log("bbb는 0이 아닙니다.");
}
// 결과 : bbb는 0이 아닙니다.
// 이유 : bbb의 값은 숫자 0이 아닌 문자 0이기 때문!