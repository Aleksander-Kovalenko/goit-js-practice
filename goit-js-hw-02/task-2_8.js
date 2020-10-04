function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
  for (let i = 0; i <= array.length; i += 1) {
    if (Number.isFinite(array[i])) {
      total += array[i];
    }
  }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5

/*
1. Ф-ия принимающая масив чисел.
2. Объявления перменной let total = 0;
3. Цикл перебора значений
4. Условная конструкция определния числа
5. Если число ТО total+ ИНАЧЕ игнорируется 
6. Возваращет 0 или сумму агрументов массива.
*/
