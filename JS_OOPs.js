//object leteral
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name); // John
// An object literal in JavaScript is a syntax for defining an object using curly braces {} with zero or more key-value pairs. It is the most common way to define structured data in JavaScript and supports methods, nested objects, and shorthand syntax.

// ----------------------------------
//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}
//creating an object using the constructor function 
let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);
// -----------------------------------
//class syntax
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
    // static method
    static staticMethod() {
        console.log("This is a static method.");
    }
}
//creating an object using the class syntax
let person3 = new PersonClass("John", 30);
//calling the static method
PersonClass.staticMethod(); // This is a static method.
// -------------------------------------
//prototype
// In JavaScript, a prototype is an object that is associated with every function and object by default. It provides a mechanism through which objects can inherit properties and methods from other objects.
PersonClass.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
//creating an object using the prototype
let person4 = new PersonClass("Jane", 25);
person4.greet(); // Hello, my name is Jane
// pillars of OOPs :-
// _______________________________________
//1. Encapsulation: Bundling data and methods that operate on that data within a single unit (class).
//example of Encapsulation // focus on data security 
class PersonEncapsulation {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let personEncap = new PersonEncapsulation("John", 30);
console.log(personEncap.getName()); // John
// ----------------------------------------------------------------
//2. Abstraction: Hiding the complex implementation details and showing only the essential features of the object.
//example of Abstraction 
class Employee {
    #salary; // Private field
    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
    setSalary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
            console.log("Salary updated to: " + this.#salary);
        } else {
            console.log("Invalid salary amount");
        }
    }
}
let emp1 = new Employee("Alice", 5000);
emp1.setSalary(6000); // Salary updated to: 6000
console.log(emp1.getSalary()); // 6000
// console.log(emp1.#salary); // SyntaxError: Private field '#salary' must be declared in an enclosing class
// ----------------------------------------------------------------
// Step 1: Define the abstraction
// interface PaymentProcessor {
//     pay(amount: number): void;
//   }
  
//   // Step 2: Concrete implementations
//   class PayPal implements PaymentProcessor {
//     pay(amount: number): void {
//       console.log(`Paid ₹${amount} using PayPal`);
//     }
//   }
  
//   class Stripe implements PaymentProcessor {
//     pay(amount: number): void {
//       console.log(`Paid ₹${amount} using Stripe`);
//     }
//   }
  
//   // Step 3: A function that uses abstraction
//   class Checkout {
//     constructor(private processor: PaymentProcessor) {}
  
//     processPayment(amount: number): void {
//       this.processor.pay(amount);
//     }
//   }
  
//   // Usage
//   const paypal = new PayPal();
//   const stripe = new Stripe();
  
//   const checkout1 = new Checkout(paypal);
//   checkout1.processPayment(1000); // Paid ₹1000 using PayPal
  
//   const checkout2 = new Checkout(stripe);
//   checkout2.processPayment(1500); // Paid ₹1500 using Stripe
  
//-----------------------------------------------------------------
//3. Inheritance: Mechanism where a new class can inherit properties and methods from an existing class. It allows for code reusability and the creation of hierarchical relationships between classes.
//example of Inheritance
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " vehicle is starting.");
    }
    hasSunroof() {
        console.log(this.brand + " has a sunroof.");
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // Call the parent class constructor
        this.model = model;
    }
    start() {
        super.start(); // Call the parent class method
        console.log(this.brand + " " + this.model + " is ready to drive.");
    }
}
// Creating an instance of the Vehicle class
let myVehicle = new Vehicle("Honda");
myVehicle.hasSunroof(); // Output: Honda has a sunroof.
// Creating an instance of the Car class
let myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: Toyota vehicle is starting. Toyota Corolla is ready to drive.
// Inheritance allows the Car class to inherit properties and methods from the Vehicle class, enabling code reuse and a clear hierarchical structure.
// ----------------------------------------------------------------
//4. Polymorphism: Ability of different classes to be treated as instances of the same class through a common interface. It allows for method overriding and dynamic method resolution at runtime.
//example of Polymorphism
class AnimalPoly {
    speak() {
        console.log("Animal makes a noise.");
    }
}
class Dog extends AnimalPoly {
    speak() {
        console.log("Dog barks.");
    }
}
class Cat extends AnimalPoly {
    speak() {
        console.log("Cat meows.");
    }
}
// Creating instances of the classes
let myDog = new Dog();
let myCat = new Cat();
myDog.speak(); // Output: Dog barks.
myCat.speak(); // Output: Cat meows.

//method overriding
class Parent {
    show() {
        console.log("Parent class method.");
    }
}
class Child extends Parent {
    show() {
        console.log("Child class method.");
    }
}
let obj = new Child();
obj.show(); // Output: Child class method.
// The Child class overrides the show() method of the Parent class, demonstrating polymorphism.
// The method is resolved at runtime based on the object type, allowing for dynamic behavior.
// ----------------------------------------------------------------
//overloading
// In JavaScript, method overloading is not supported in the same way as in some other languages. Instead, you can use default parameters or the rest operator to achieve similar functionality.
// For example:
// class MathOperations {
//     add(...args) {
//         return args.reduce((acc, curr) => acc + curr, 0);
//     }
// }
// let math = new MathOperations();
//-----------------------------------------
//MAXIMUM Call stack exceeded error
// when we create a class and inside constractor when we set the value of the class itself then using a setvalue method if we try to set the same value again then it will create a infinite loop and we get the error of maximum call stack exceeded. 
// example of this error
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     setName(name) {
//         this.name = name; // This will cause a maximum call stack size exceeded error
//     }
// }

// Access Modifier in TS
// | Modifier    | Meaning                                                            |
// | ----------- | ------------------------------------------------------------------ |
// | `public`    | Accessible from **anywhere** (default if no modifier is specified) |
// | `private`   | Accessible **only within the class**                               |
// | `protected` | Accessible **within the class and its subclasses**                 |
// | `readonly`  | Cannot be reassigned after initialization                          |
