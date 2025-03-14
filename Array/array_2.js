const numbers = [1, 2, 3];

// Add elements
numbers.push(4); // Adds at the end
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.unshift(0); // Adds at the beginning
console.log(numbers); // Output: [0, 1, 2, 3, 4]

// Remove elements
numbers.pop(); // Removes last element
console.log(numbers); // Output: [0, 1, 2, 3]

numbers.shift(); // Removes first element
console.log(numbers); // Output: [1, 2, 3]
