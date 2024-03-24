const [count] = document.getElementsByTagName("span");
const countUpButton = document.getElementById("count-up-button");

// click 시, 숫자가 1씩 증가하게 되는 함수
// 여기서 click이 이벤트 핸들러
countUpButton.onclick = () => {
  if (isNaN(Number(count.innerHTML))) return;
  count.innerHTML = Number(count.innerHTML) + 1;
};

// mouse를 올리면, 색이 변경되는 함수
// 여기서 mouseover가 이벤트 핸들러
count.onmouseover = () => {
  count.style.backgroundColor = "gray";
  count.style.color = "white";
};

// mouse를 떼면, 색이 변경되는 함수
// 여기서 mouseout가 이벤트 핸들러
count.onmouseout = () => {
  count.style.backgroundColor = "transparent";
  count.style.color = "black";
};

// input에 focus를 두면 자동 입력이라는 글씨가 출력됨
// 여기서 focus가 이벤트 핸들러
const input = document.getElementsByTagName("input")[0];

input.onfocus = () => {
  input.value = "자동 입력";
};

// inpu2에 값을 입력하면, 그 값이 result로 출력됨
// 여기서 change가 이벤트 핸들러
const input2 = document.getElementsByTagName("input")[1];
const result = document.getElementById("result");

input2.onchange = (event) => {
  // event.target : 이벤트가 발생한 DOM
  // event.target.value 이벤트가 발생한 DOM의 값
  result.innerHTML = event.target.value;
};

const test = document.getElementById("test");

new Array(10).fill(0).forEach((_, index) => {
  test.addEventListener("click", () => {
    console.log(`test clicked ${index + 1}`);
  });
});
