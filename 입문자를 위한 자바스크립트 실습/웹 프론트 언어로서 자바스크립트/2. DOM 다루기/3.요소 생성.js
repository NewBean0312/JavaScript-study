// 3. 요소 생성

// 태그 요소 생성
const dom = document.createElement('div');

// body에 dom 추가
document.body.appendChild(dom);

const dom2 = document.createElement('div');

// dom2의 내용 추가
dom2.innerHTML = '마지막';

// dom 앞에 dom2 추가
document.body.insertBefore(dom2, dom);