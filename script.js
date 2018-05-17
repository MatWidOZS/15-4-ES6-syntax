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

//Task 3
console.log('\nTask 3:\n\n');


const average = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue) / numbers.length;


const result = average(1, 3, 6, 6, 9, 11);

console.log(`The average is: `, result);

//Task 4
console.log('\nTask 4:\n\n');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`Average of grades: ${grades} is:`, average(...grades));