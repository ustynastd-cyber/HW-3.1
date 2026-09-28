const firstTextField = prompt("Введіть значення першого текстового поля:") ?? "";
const secondTextField = prompt("Введіть значення другого текстового поля:") ?? "";

if (firstTextField.trim() !== "" && secondTextField.trim() !== "") {
	console.log("Обидва поля заповнені");
} else {
	console.log("Не всі поля заповнені");
}

const firstNumber = Number(prompt("Введіть перше число:") ?? "");
const secondNumber = Number(prompt("Введіть друге число:") ?? "");
const sum = firstNumber + secondNumber;

if (sum > 10) {
	console.log("Сума більша за 10");
} else {
	console.log("Сума менша або дорівнює 10");
}

const text = prompt("Введіть текст:") ?? "";

if (text.includes("JavaScript")) {
	console.log("Текст містить слово JavaScript");
} else {
	console.log("Текст не містить слово JavaScript");
}

const numberToCheck = Number(prompt("Введіть число для перевірки діапазону:") ?? "");

if (numberToCheck > 10 && numberToCheck < 20) {
	console.log("Число входить в діапазон від 10 до 20");
} else {
	console.log("Число не входить в діапазон від 10 до 20");
}

const name = prompt("Введіть ім'я:") ?? "";
const email = (prompt("Введіть email:") ?? "").trim();
const password = prompt("Введіть пароль:") ?? "";
const atPosition = email.indexOf("@");
const dotPosition = email.indexOf(".", atPosition + 1);

if (name.trim().length >= 3 && atPosition !== -1 && dotPosition > atPosition && password.length >= 6) {
	console.log("Перенаправлення на іншу сторінку");
} else {
	console.log("Помилка: неправильне заповнення");
}
