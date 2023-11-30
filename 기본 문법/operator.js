/*
 * 비교 연산자
 * === : 서로 같은지 엄격하게 검사 (값과 타입이 모두 일치해야 함)
 * !-- : 서로 다른지 엄격하게 검사 (값 or 타입이 달라야 함)
 *
 * == : 서로 같은지 느슨하게 검사 (값이 일치해야 함)
 * != : 서로 다른지 느슨하게 검사 (값이 달라야 함)
 */
console.log("==비교 연산자 예시==");
const a = 1;
const b = "1";
console.log(a === b); // false (값은 같으나 타입이 다름)
console.log(a !== b); // true (값은 같으나 타입이 다름)
console.log(a == b); // true (값이 같음)
console.log(a != b); // false (값이 다름)
console.log("");

/*
 * 증감 연산자
 * ++ : 값이 증가함 (증가 연산자)
 * -- : 값이 감소함 (감소 연산자)
 */
console.log("==증감 연산자 예시1==");
let count1 = 0;
count1++;
count1++;
count1++;
console.log(count1); // 3 (3번 증가함);
console.log("");

console.log("==증감 연산자 예시2==");
let count2 = 0;
count2--;
count2--;
count2--;
console.log(count2); // -3 (3번 감소함);
console.log("");

/*
 * 논리 연산자
 * && : 둘다 true이면, true 반환 (하나라도 false이면, false 반환) (and)
 * || : 둘중 하나라도 true이면, true 반환 (or)
 * ! : 값을 반대로 반환 (not)
 */
console.log("==논리 연산자 예시1==");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && 3 == 4); // false
console.log("Cat" && "Dog"); // Dog
console.log(false && "Cat"); // false
console.log("Cat" && false); // false
console.log("");

console.log("==논리 연산자 예시2==");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || 3 == 4); // false
console.log("Cat" || "Dog"); // Cat
console.log(false || "Cat"); // Cat
console.log("Cat" || false); // Cat
console.log("");

console.log("==논리 연산자 예시3==");
console.log(!true); // false
console.log(!false); // true
console.log(!"Cat"); // false
console.log("");

/*
* 삼항 연산자
* (조건 ? 참 : 거짓) : 조건이 true이라면 참을 반환하고, false이라면 거짓를 반환
 */
console.log("==삼항 연산자 예시==");
const age = 20;
console.log(age >= 19 ? "성인" : "미성년자") // 성인
console.log("");