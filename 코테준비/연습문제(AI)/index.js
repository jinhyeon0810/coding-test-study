// ## 1) 주문 정산기 (구현 + 엣지케이스)
// ### 문제
// N개의 로그가 주어진다.
// - `ORDER user amount` : user가 amount(정수)만큼 주문
// - `CANCEL user amount` : user가 amount만큼 주문 취소

// 규칙:
// - 유저별 금액 = 주문합 - 취소합
// - 처리 도중/최종 금액이 ****0 미만이면 0으로 고정***
// - 한 번이라도 등장한 유저는 ****금액이 0이어도 출력***
// - 출력은 `user` 오름차순

// ### 입력
// - 첫 줄: N
// - 다음 N줄: 로그

// ### 출력
// - 각 줄: `user finalAmount` (user 오름차순)
// ### 예시 입력

// ```
// 6
// ORDER kim 1000
// ORDER lee 500
// CANCEL kim 300
// CANCEL lee 700
// ORDER lee 400
// CANCEL kim 800
// ```
// ### 예시 출력
// ```
// kim 0
// lee 400
// ```

const fs = require("fs");
const [number, ...inputArr] = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

let arr = [];

for (let i = 0; i < number; i++) {
  let [type, user, amount] = inputArr[i].split(" ");
  arr.push({ type, user, amount: parseInt(amount) });
}

let resultMap = new Map();

for (let i = 0; i < number; i++) {
  let [status, name, amountStr] = inputArr[i].split(" ");
  const amount = Number(amountStr);

  const currentAmount = resultMap.get(name) ?? 0;
  let nextAmount = 0;

  if (status === "ORDER") {
    nextAmount = currentAmount + amount;
  } else if (status === "CANCEL") {
    nextAmount = currentAmount - amount;
  } else {
    throw new Error("type이 존재하지 않습니다.");
  }

  if (nextAmount < 0) nextAmount = 0;
  resultMap.set(name, nextAmount);
}

const resultArr = [...resultMap.entries()].sort(([a, c], [b]) => {
  return a.localeCompare(b);
});

const result = resultArr
  .map(([name, amount]) => {
    return `${name} ${amount}`;
  })
  .join("\n");

console.log(result);
