// 쿠키 설정
// 클라이언트 코드
document.cookie = "name=juv; path=/; max-age=3600";

// 서버 코드
// response.header {
//     Set-Cookie: "name=juv; path=/; max-age=3600";
// }

// 쿠키 접근
document.cookie;

// 쿠키 삭제
document.cookie = "같은 정보... max-age=0";

// 쿠키 요청
fetch(URL, {
  credentials: "include",
});
