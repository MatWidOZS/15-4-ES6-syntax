//Task 1
console.log('\nTask 1:\n\n');

const firstString = 'Hello';
const secondString = 'World';

console.log(`${firstString} ${secondString}!`);

//Task 2
console.log('\nTask 2:\n\n');

const multiply = (x, y = 2) => console.log(`The result of multiplication ${x} and ${y} is: `, x * y);

multiply(5, 6);
multiply(5);
multiply(-8, 3.5);
multiply(4.567);