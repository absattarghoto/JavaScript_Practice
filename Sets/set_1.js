const mySet = new Set();

// Adding values
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(10); // Duplicate value, will be ignored

console.log(mySet); // Output: Set { 10, 20, 30 }

// Checking if a value exists
console.log(mySet.has(20)); // Output: true
console.log(mySet.has(50)); // Output: false

// Deleting a value
mySet.delete(20);
console.log(mySet); // Output: Set { 10, 30 }

// Getting the size
console.log(mySet.size); // Output: 2

// Clearing all values
mySet.clear();
console.log(mySet); // Output: Set {}
