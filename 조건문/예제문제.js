//1.시험성적
// function solution(score) {
//   if (90 <= score <= 100) {
//     return "A";
//   } else if (80 <= score <= 89) {
//     return "B";
//   } else if (70 <= score <= 79) {
//     return "C";
//   } else if (60 <= score <= 69) {
//     return "D";
//   } else {
//     return F;
//   }
// }

// let score = 85;
// console.log(solution(score));

//2. 45분 단축
// function solution2(H, M) {
//   if (M < 45) {
//     H = H - 1;
//     M = M + 15;
//     if (H < 0) H = 23;
//     return { H, M };
//   } else {
//     M = M - 45;
//     return { H, M };
//   }
// }

// let H = 0;
// let M = 10;
// console.log(solution2(H, M));

//3.오븐시계
// function solution3(hour, minute, Time) {
//   let result;
//   hour = hour * 60;
//   result = hour + minute + Time;
//   hour = parseInt(result / 60);
//   minute = result % 60;
//   return console.log(hour, minute);
// }

// let hour = 4;
// let minute = 55;
// let Time = 90;

// console.log(solution3(hour, minute, Time));

//4. 주사위게임
// 같은눈이 3개나오면 10,000원 +(같은눈)*1000원 상금
// 같은눈이 2개만나옴ㄴ 1000원 +(같은눈)*100원의 상금
// 모두 다른 눈이 나오는 경우, (그중 가장 큰 눈)*100원 상금

function solution4(a, b, c) {
  let result;
  if (a == b && b == c) {
    result = 10000 + a * 1000;
  } else if (a == b) {
    result = 1000 + a * 100;
  } else if (a == c) {
    result = 1000 + a * 100;
  } else if (b == c) {
    result = 1000 + b * 100;
  } else {
    result = Math.max(a, b, c) * 100;
  }
  return result;
}

console.log(solution4(10, 3, 10));
