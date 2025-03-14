const numbers = [40, 10, 50, 30, 20];

numbers.sort(); // Sorts in dictionary order (incorrect for numbers)
console.log(numbers); // Output: [10, 20, 30, 40, 50]

numbers.reverse(); // Reverses the array
console.log(numbers); // Output: [50, 40, 30, 20, 10]

// Correct sorting for numbers
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [10, 20, 30, 40, 50]
