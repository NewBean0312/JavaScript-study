const obj = {};

let result = "";
try {
    result = obj.property.a // 에러 발생 유도
} catch (error) {
  result = "모름"; // 기본값
  console.dir(error); // error 객체를 표현
} finally {
  console.log(`result = ${result}`);
}

// 커스텀 에러
try {
    // throw : 에러 발생 키워드
    throw new Error('이건 커스텀 에러입니다.');
} catch (error) {
    console.dir(error);
}