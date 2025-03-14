function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

const student1 = new Student("Ali", 21, "Computer Science");
const student2 = new Student("Ayesha", 23, "Software Engineering");

console.log(student1.name); // Output: Ali
console.log(student2.course); // Output: Software Engineering
