// 배열 안 9가지 요소 중 2가지를 제외 한
// 7가지의 요소들의 합이 100이 되게 합니다.

function answer(dwarf) {
  let result = [];

  let dwarfSum = dwarf.reduce((acc, cur) => acc + cur, 0);
  console.log(dwarfSum);

  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (dwarf[i] + dwarf[j] == dwarfSum - 100) {
        faker[0] = dwarf[i];
        faker[1] = dwarf[j];
      }
    }
  }

  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] !== dwarf[i] && faker[1] !== dwarf[i]) {
      result[count++] = dwarf[i];
    }
  }

  return result;
}

dwarf = [1, 5, 6, 7, 10, 12, 19, 29, 33];

console.log(answer(dwarf));
