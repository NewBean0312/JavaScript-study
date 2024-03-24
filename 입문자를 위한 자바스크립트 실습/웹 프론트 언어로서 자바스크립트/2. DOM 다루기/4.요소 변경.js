// 4. 요소 변경하기

const testDiv = document.getElementById("test");
const testDiv2 = document.getElementById("test2");

// 요소 내부의 HTML을 변경
testDiv.innerHTML = "테스트용 수정";

// 해당 색상 변경
testDiv.style.color = "red";

// hidden 설정
testDiv2.hidden = true;

const testInput = document.getElementById("test-input");

// input의 value 값 변경
testInput.value = "자동으로 입력";