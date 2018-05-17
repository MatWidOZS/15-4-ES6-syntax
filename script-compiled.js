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
