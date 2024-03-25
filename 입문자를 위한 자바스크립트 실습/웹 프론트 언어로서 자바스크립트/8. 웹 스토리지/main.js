// 1. 웹 스토리지 쓰기
// 로컬 스토리지
localStorage.getItem("key", value);
localStorage.key = value;

// 세션 스토리지
sessionStorage.getItem("key", value);
sessionStorage.key = value;


// 2. 웹 스토리지 접근
// 로컬 스토리지
localStorage.getItem("key");
localStorage.key;

// 세션 스토리지
sessionStorage.getItem("key");
sessionStorage.key;


// 3. 웹 스토리지 삭제
// 로컬 스토리지
localStorage.removeItem("key");
localStorage.clear();

// 세션 스토리지
sessionStorage.removeItem("key");
sessionStorage.clear();