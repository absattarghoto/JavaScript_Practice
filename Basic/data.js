let myString = "JavaScript";  // String
let myNumber = 100;           // Number
let myBoolean = true;         // Boolean
let myUndefined;              // Undefined
let myNull = null;            // Null
let myBigInt = 12345678901234567890n; // BigInt
let mySymbol = Symbol("id");  // Symbol

console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof myBoolean); // "boolean"
console.log(typeof myUndefined); // "undefined"
console.log(typeof myNull); // "object" (JavaScript bug)
console.log(typeof myBigInt); // "bigint"
console.log(typeof mySymbol); // "symbol"
