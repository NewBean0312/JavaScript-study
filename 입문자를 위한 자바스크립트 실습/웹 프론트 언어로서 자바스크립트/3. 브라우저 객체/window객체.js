// window 객체의 alert
alert("Hello World");

// window 객체의 confirm
if (confirm("정말로 삭제하시겠습니까?")) {
  console.log("삭제됨");
} else {
  console.log("삭제 취소");
}

// window 객체의 prompt
const name = prompt("이름이 무엇인가요?");

// window 객체의 setTimeout
let timerId = setTimeout(() => {
    console.log('5 seconds end');
}, 5000);

// window 객체의 setInterval
let timerId2 = setInterval(() => {
    console.log('1 seconds end');
}, 1000);