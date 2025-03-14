class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object (instance) of the class
const person1 = new Person("Abdul", 22);
person1.introduce();  
// Output: Hi, my name is Abdul and I am 22 years old.
