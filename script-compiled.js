'use strict';

//Task 1
console.log('\nTask 1:\n\n');

var firstString = 'Hello';
var secondString = 'World';

console.log(firstString + ' ' + secondString + '!');

//Task 2
console.log('\nTask 2:\n\n');

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return console.log('The result of multiplication ' + x + ' and ' + y + ' is: ', x * y);
};

multiply(5, 6);
multiply(5);
multiply(-8, 3.5);
multiply(4.567);

//Task 3
console.log('\nTask 3:\n\n');

var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }) / numbers.length;
};

var result = average(1, 3, 6, 6, 9, 11);

console.log('The average is: ', result);

//Task 4
console.log('\nTask 4:\n\n');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('Average of grades: ' + grades + ' is:', average.apply(undefined, grades));
