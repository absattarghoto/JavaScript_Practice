const firstName = "Abdul";
const lastName = "Sattar";

// Using + operator
const fullName1 = firstName + " " + lastName;
console.log(fullName1); // Output: Abdul Sattar

// Using template literals (ES6)
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); // Output: Abdul Sattar

// Multi-line string using template literals
const introduction = `Hello, my name is ${firstName} ${lastName}.
I am a Front-End Developer.`;
console.log(introduction);
/* Output:
Hello, my name is Abdul Sattar.
I am a Front-End Developer.
*/
