// Using var (function-scoped)
var city = "Karachi";
console.log(city); // Output: Karachi

// Using let (block-scoped)
let age = 25;
age = 26; // ✅ Allowed (let can be reassigned)
console.log(age); // Output: 26

// Using const (cannot be changed)
const country = "Pakistan";
// country = "India"; // ❌ Error: Assignment to constant variable
console.log(country); // Output: Pakistan

// Block scope demonstration
if (true) {
    var x = 10;  // Accessible outside the block
    let y = 20;  // Block-scoped
}
console.log(x); // ✅ Output: 10 (var is function-scoped)
// console.log(y); // ❌ Error: y is not defined (let is block-scoped)
