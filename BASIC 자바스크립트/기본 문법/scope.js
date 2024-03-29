/*
 * Scope (스코프)
 *  - 변수 유효 범위
 *  - 내부에서 외부로는 접근 가능
 *  - 외부에서 내부로는 접근 불가능
 *  - 예시 : var, let, const
 *
 *  var : 함수 단위 유효 범위
 *  let, const (추천): 블럭 단위 유효 범위
 */

// 예시 1
var varVal = "홍길동";

function test() {
  var num = 123;

  console.log(varVal); // 호출 가능 (내부에서 외부 접근 O)
  return "test";
}
// console.log(num); 호출 불가능 (외부에서 내부 접근 X)
test();

// ---------------------------------------------------------------

// 예시 2
var globalVal = "전역 변수";

function outerFunc() {
  console.log(globalVal); // 호출 가능 (내부에서 외부 접근 O)
  // console.log(innerVal) 호출 불가능 (외부에서 내부 접근 X)

  function innerFunc() {
    var innerVal = " 함수 내부 지역 변수";
    console.log(globalVal); // 호출 가능 (내부에서 외부 접근 O)
  }

  innerFunc();
}
outerFunc();

// ---------------------------------------------------------------

// 예시 3
var globalVal2 = "전역 변수";

// index가 var라서 내부 호출이 가능하지만, let이면 블럭 단위가 되어 for 문 안에서만 사용할 수 있음.
for (var index = 0; index < 3; index++) {}

function outerFunc2() {
  console.log(globalVal2); // 전역 변수

  function innerFunc2() {
    var innerVal2 = "함수 내부 지역 변수";
    console.log(index); // 3
  }

  innerFunc2();
}
outerFunc2();
