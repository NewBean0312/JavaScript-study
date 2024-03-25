// json 파일 불러오기
fetch("./sample.json").then(async (result) => {
  console.log("result", result);
  if (result.ok) {
    const data = await result.json();
    console.log(data);
  }
});

// 외부 url 불러오기
fetch("https://ohou.se")
  .then((res) => {
    console.log("success", res);
  })
  .catch((err) => {
    console.log("error", err);
  });
