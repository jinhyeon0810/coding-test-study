//백준의 경우 readFileSync('/dev/stdin')

// let fs = require('fs');
// let input = fs.readFileSync("index.txt").toString().split('\n');
// const inputNum = parseInt(input);
//     inputNum = 1992;

// console.log(inputNum-543);

// const fs = require('fs');
// const inputData = fs.readFileSync('index.txt').toString().split('').map(v => parseInt(v));

// const [A,B,C] = inputData;

// console.log((A+B)%C);

// const fs = require('fs');

// let [num1, num2] = fs.readFileSync('index.txt').toString().split('\n');

// num1 = 472
// num2 = 385

// let oneNum = num2%10
// let tenNum = Math.floor((num2%100)/10)
// let hundredNum = Math.floor(num2/100)

// console.log(num1 * oneNum)
// console.log(num1 * tenNum)
// console.log(num1 * hundredNum)
// console.log(num1*num2)

// var name;

// console.log(name);
//[3,4,1,2,5]

// function solution(cards) {

//     while(cards.length > 1){
//         const card1 = Math.max(...cards);

//         cards.splice(cards.indexOf(card1),1);

//         const card2 = Math.max(...cards);
//         cards.splice(cards.indexOf(card2),1);

//         if(card1 == card2){
//             continue;
//         } else if(card1>card2){
//             cards.push(card1-card2)
//         } else if(card1<card2){
//             cards.push(card2-card1)
//         }
//     }
//      return cards.length > 0 ? cards[0] : 0;
//  }

//  cards = [4,8,6,1,2]

// console.log(solution(cards))

function answer(a, b, c, d) {
  let result;
  if (a / b > c / d) {
    result = 1;
  }

  if (a / b == c / d) {
    result = 0;
  }

  if (a / b < c / d) {
    result = -1;
  }
  return result;
}

console.log(answer(18, 2, 36, 4));
