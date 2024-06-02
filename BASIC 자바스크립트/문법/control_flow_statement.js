// 제어문에서 바디(몸통) <= 로직(명령)
/*
 * for (반복 조건 초기화) {
 *     if (20살 이상이다) {
 *         // 성인
 *         if (20미만 8살 이상이다) {
 *             // 학생
 *             if (8살 미만이다) {
 *                 // 영아
 *             }
 *         }
 *     }
 * }
*/

// switch case 문
// 맞는 case에 따라 명령문이 실행됨
// 아무것도 맞지 않을 시, default가 실행됨
// ※ break가 없을 시, 전부 다 실행될 수 있으니 주의
/*
 * switch (기상상태) {
 *     case 비가온다:
 *         [break;]
 *     case 비가 많이 온다:
 *         [break;]
 *     case 비가 조금 온다:
 *         [break;]
 *     [default:
 *         [break;]]
}
*/

// continue는 건너뛰기 역할
let i = 0;
const MAX = 10;

while (i < MAX) {
    i++;

    if (i % 2 === 0) {
        continue;
    }

    console.log(i); // 1, 3, 5, 7, 9
} 