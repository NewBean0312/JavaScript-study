// 2. 인접 노드 접근

document.getElementById("navigation-menu");

// 변수 지정
const navigationMenu = document.getElementById("navigation-menu");

// 자식들을 불러옴
navigationMenu.children;

// 자식들 내용 확인
for (menu of navigationMenu.children) {
  console.log(menu.innerHTML);
}

// 첫 번째 자식을 불러옴
navigationMenu.firstElementChild;

// 마지막 자식을 불러옴
navigationMenu.lastElementChild;

// 현재 태그 전에 있는 태그를 불러옴 (즉, ul 태근 전의 a 태그를 불러옴)
navigationMenu.previousElementSibling;

// 현재 태그 후에 있는 태그를 불러옴 (즉, ul 태근 후의 button 태그를 불러옴)
navigationMenu.nextElementSibling;

// 현재 태그의 부모 태그를 불러옴 (즉, ul 태그의 부모인 header 태그를 불러옴)
navigationMenu.parentElement;