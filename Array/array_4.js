const numbers = [10, 20, 30, 40, 50];

// map() - Creates a new array with modified values
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [20, 40, 60, 80, 100]

// filter() - Creates a new array with elements that match a condition
const greaterThan30 = numbers.filter(num => num > 30);
console.log(greaterThan30); // Output: [40, 50]

// find() - Returns the first element that matches a condition
const firstMatch = numbers.find(num => num > 30);
console.log(firstMatch); // Output: 40
