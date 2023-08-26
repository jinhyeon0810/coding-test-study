//1. 1부터 n까지의 합 : 시간복잡도 O(N)
//문자열을 숫자로 변환하는 parseInt보다 Number의 속도가 더 빠르게 동작
// function solution1(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// let n = 50;
// console.log(solution1(n));

//2.구구단N단
// function solution2(N) {
//   for (let i = 1; i <= 9; i++) {
//     console.log(N + " * " + i + " = " + N * i);
//   }
// }

// console.log(solution2(2));

//3. 별 출력문제
// function solution3(N) {
//   let result = "";
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j <= i; j++) {
//       result = result + "*";
//     }
//     result = result + "\n";
//   }
//   return result;
// }
// console.log(solution3(5));
