function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convert = convertHoursToMinutes(2);
console.log('convert', convert);

function getGreeting(who) {
  return 'Hello ' + who + '!';
}
var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiply', addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivide', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtract', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Collin', 'Hovey');
console.log('fullName', fullName);

function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log('cube', cubed);
