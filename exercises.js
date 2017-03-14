//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var subtraction = num - 5;
  return subtraction;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if (x === y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num > 50){
    return true;
  }
  return false;
}

function add(x, y) {
  var addition = x + y;
  return addition;
}

function subtract(x, y) {
  var subtraction = x - y;
  return subtraction;
}

function divide(x, y) {
  var division = x / y;
  return division;
}

function multiply(x, y) {
  var multiplication = x * y;
  return multiplication;
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  if (num % 2 == 0){
    return true;
  }
  return false;
}

function isOdd(num) {
  if (num % 2 != 0){
    return true;
  }
  return false;
}

function square(num) {
  var sq = num * num;
  return sq;
}

function cube(num) {
  var cb = num * num * num;
  return cb;
}

function raiseToPower(num, exponent) {
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  var rounding = Math.round(num);
  return rounding;
}

function roundUp(num) {
  var roundItUp = Math.ceil(num);
  return roundItUp;
}

function addExclamationPoint(str) {
  var exclaimation = str + '!';
  return exclaimation;
}

function combineNames(firstName, lastName) {
  var combo = firstName + ' ' + lastName;
  return combo;
}

function getGreeting(name) {
  var greetName = 'Hello ' + name + '!';
  return greetName;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  var recArea = length * width;
  return recArea;
}

function getTriangleArea(base, height) {
  var triangle = (0.5 * (base * height));
  return triangle;
}

function getCircleArea(radius) {
  var circRadius = (radius * radius * Math.PI);
  var areaOfCircle = Math.round(circRadius);
  return areaOfCircle;
}

function getRectangularPrismVolume(length, width, height) {
  var vol = (length * height * width);
  return vol;
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
