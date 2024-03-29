// 객체
const user = {
  // key(property), 속성 : value (행동 메서드)
  name: {
    first: "Kim",
    last: "min-jung",
  },
  age: 20,
  gender: "male",
  introduce: function (guest) {
    return "Hello " + guest + ". my name is Kim!";
  },
  hobby: ["study", "football"],
};

console.log(user["name"]["first"]); // Kim
console.log(user.name.last) // min-jung
console.log(user.age); // 20
console.log(user.introduce("Lee")); // Hello Lee my name is Kim!
