// 1. Temperature conversion from Celsius to Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log('Temperature in Fahrenheit:', fahrenheit);

// 2. Days, hours, and minutes in a month
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log('Hours in month:', hoursInMonth);
console.log('Minutes in month:', minutesInMonth);

// 3. Reduce player's health and energy
let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log('Health after reduction:', health);
console.log('Energy after reduction:', energy);

// 4. Discount calculation for a purchase
const totalPrice = 200;
const discount = 0.1;
const discountedPrice = totalPrice * (1 - discount);
console.log('Discounted price:', discountedPrice);

// 5. Round down a floating-point number
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log('Rounded down:', roundedDown);

// 6. Parse a floating-point number from a string
const floatString = '45.67';
const parsedFloat = parseFloat(floatString);
console.log('Parsed float:', parsedFloat);

// 7. Parse an integer from a string
const intString = '123';
const parsedInt = parseInt(intString, 10);
console.log('Parsed integer:', parsedInt);

// 8. Calculate square root of a number
let number = 64;
const sqrtNumber = Math.sqrt(number);
console.log('Square root:', sqrtNumber);

// 9. Convert string to integer and integer to string
const integer = 42;
const stringNumber = '256';
const convertedInt = parseInt(stringNumber, 10);
const convertedString = integer.toString();
console.log('Converted integer:', convertedInt);
console.log('Converted string:', convertedString);
