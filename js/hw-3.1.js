// 1. Вивести в консоль всі числа від 1 до 10 за допомогою циклу while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log('---');

// 2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for
// Пропускаємо непарні числа за допомогою continue
for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
console.log('---');

// 3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for
for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}
console.log('---');

// 4. Вивести всі числа, які менші за n, і завершити цикл за допомогою break
const n = 15;
for (let i = 1; i <= 100; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}
console.log('---');

// 5. За допомогою циклу while вивести всі числа від 1 до 20, крім кратних 3
let j = 1;
while (j <= 20) {
  if (j % 3 === 0) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}
