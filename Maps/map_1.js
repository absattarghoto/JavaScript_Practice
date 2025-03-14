// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Abdul");
myMap.set("age", 25);
myMap.set("country", "Pakistan");

// Get values
console.log(myMap.get("name")); // Output: Abdul
console.log(myMap.get("age"));  // Output: 25

// Check if a key exists
console.log(myMap.has("age")); // Output: true
console.log(myMap.has("city")); // Output: false

// Delete a key
myMap.delete("country");
console.log(myMap); // Output: Map { 'name' => 'Abdul', 'age' => 25 }

// Get the size of the Map
console.log(myMap.size); // Output: 2
