function filterArray(array) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line

    if (Number.isFinite(array[i])) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

/*
1. Создать ф-ию с одним параметром.
2. Цикл перебора каждого аргумента массива.
3. Если число ТО добавляется в новый массив (push) ИНАЧЕ игнорируется. 
4. Возвращает массив чисел.
*/

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
