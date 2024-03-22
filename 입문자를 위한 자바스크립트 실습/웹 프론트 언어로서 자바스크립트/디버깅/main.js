function divide(x, y) {
  try {
    if (y === 0) {
      throw new Error("나누는 수는 0이 될 수 없음");
    }
    let result = x / y;
    return result;
  } catch (error) {
    console.error("에러 발생: ", error.message);
    // 에러 처리 or 기타 작업 수행
    return NaN; // NaN (Not a Number) 반환
  }
}

// divide 함수 호출
console.log(divide(10, 2)); // 5 출력
console.log(divide(10, 0)); // 예외 발생: 에러 메시지 출력 후, NaN 출력
