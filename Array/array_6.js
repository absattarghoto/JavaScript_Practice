const numbers = [10, 20, 30, 40, 50];

// Sum of numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 150

// Average
const average = sum / numbers.length;
console.log(average); // Output: 30
