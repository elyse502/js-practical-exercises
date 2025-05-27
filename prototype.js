#!/usr/bin/node
// 1. Constructor Function with Prototype Methods
// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to Person prototype
Person.prototype.greet = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

// Create instance
const alice = new Person("Alice", 25);
console.log(alice.greet());
console.log();


// 2. Inheritance via Prototype Chain
// Constructor Function for Student
function Student(name, age, course) {
    Person.call(this, name, age); // Inherit properties
    this.course = course;
}

// Inherit from Person prototype
Student.prototype = Object.create(Person.prototype);

// Fix constructor pointer
Student.prototype.constructor = Student;

// Add new method specific to Student
Student.prototype.study = function () {
    return `${this.name} is studying ${this.course}.`;
};

// Create instance
const bob = new Student("Bob", 21, "Computer Science");

console.log(bob.greet()); // Inherited method
console.log(bob.study()); // Own method
console.log();


// 3. Custom Object with Object.create
const animal = {
    makeSound: function () {
        return "Generic animal sound";
    }
};

const dog = Object.create(animal);
dog.bark = function () {
    return "Woof!";
};

console.log(dog.makeSound()); // Inherited from animal
console.log(dog.bark());      // Own method
