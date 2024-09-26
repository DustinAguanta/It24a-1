// Data Types
let number = 4;
let number2=4
let text = "Im a BSIT student";
let isActive = true;
let array = [1, 2, 3, 4, 5];
let person = { name: 'Jrald', age: 19 };

// Arithmetic Operators
let sum = number + number2;
let difference = number - number2;
let product = number * number2;
let quotient = number / number2;
let remainder = number % number2;

// Logical Operators
let isPositive = number > 0;
let isEven = number % 2 === 0;

// Output data types, arithmetic results, and logical checks
console.log('Data Types:');
console.log('Number:', number);
console.log('Text:', text);
console.log('Is Active:', isActive);
console.log('Array:', array);
console.log('Person Object:', person);

console.log('\nArithmetic Operations:');
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

console.log('\nLogical Operations:');
console.log('Is Positive:', isPositive);
console.log('Is Even:', isEven);

// Conditional Statements

// if...else
console.log('\nConditional Statements (if...else):');
if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

// switch
console.log('\nConditional Statements (switch):');
switch (number) {
    case 10:
        console.log('The number is 10.');
        break;
    case 20:
        console.log('The number is 20.');
        break;
    default:
        console.log('The number is neither 10 nor 20.');
}

// Loops

// for loop
console.log('\nFor Loop:');
for (let i = 0; i < array.length; i++) {
    console.log('Array element at index', i, ':', array[i]);
}

// while loop
console.log('\nWhile Loop:');
let index = 0;
while (index < array.length) {
    console.log('Array element at index', index, ':', array[index]);
    index++;
}
