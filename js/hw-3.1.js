const drink = prompt("Оберіть напій: Кава, Чай або Сік")?.trim();

switch (drink) {
	case "Кава":
		console.log("Кава");
		break;
	case "Чай":
		console.log("Чай");
		break;
	case "Сік":
		console.log("Сік");
		break;
	default:
		console.log("Невідомий варіант напою");
}

const day = prompt("Введіть день тижня:")?.trim().toLocaleLowerCase("uk");

switch (day) {
	case "понеділок":
	case "вівторок":
	case "середа":
	case "четвер":
	case "п'ятниця":
	case "п’ятниця":
		console.log("Це робочий день");
		break;
	case "субота":
	case "неділя":
		console.log("Це вихідний день");
		break;
	default:
		console.log("Невідомий день тижня");
}

const month = Number(prompt("Введіть номер місяця від 1 до 12:") ?? "");

switch (month) {
	case 12:
	case 1:
	case 2:
		console.log("Зима");
		break;
	case 3:
	case 4:
	case 5:
		console.log("Весна");
		break;
	case 6:
	case 7:
	case 8:
		console.log("Літо");
		break;
	case 9:
	case 10:
	case 11:
		console.log("Осінь");
		break;
	default:
		console.log("Неправильний номер місяця");
}

const color = prompt("Введіть колір: червоний, зелений або жовтий")?.trim().toLocaleLowerCase("uk");

switch (color) {
	case "червоний":
		console.log("стоп");
		break;
	case "зелений":
		console.log("йти");
		break;
	case "жовтий":
		console.log("чекати");
		break;
	default:
		console.log("Невідомий колір");
}

const firstNumber = Number(prompt("Введіть перше число:") ?? "");
const operator = prompt("Оберіть оператор: +, -, *, /")?.trim();
const secondNumber = Number(prompt("Введіть друге число:") ?? "");

switch (operator) {
	case "+":
		console.log(firstNumber + secondNumber);
		break;
	case "-":
		console.log(firstNumber - secondNumber);
		break;
	case "*":
		console.log(firstNumber * secondNumber);
		break;
	case "/":
		if (secondNumber === 0) {
			console.warn("Ділити на нуль не можна");
		} else {
			console.log(firstNumber / secondNumber);
		}
		break;
	default:
		console.log("Невідомий оператор");
}
