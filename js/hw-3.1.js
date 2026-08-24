const age = 20;
console.log(age);

const name = "Ваше ім'я";
console.log(name);

const isStudent = true;
console.log(isStudent);

const myString = "Навчання ніколи не закінчується.";
console.log(myString);

let myNumber = 25;
myNumber += 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const userName = prompt("Введіть своє ім’я");
console.log(typeof userName);
alert(`Ваше ім’я: ${userName}`);

const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);

alert("Увага! Дія може бути небезпечною.");
const continueAction = confirm("Ви впевнені, що хочете продовжити?");
console.log(continueAction ? "Дію підтверджено." : "Дію скасовано.");
