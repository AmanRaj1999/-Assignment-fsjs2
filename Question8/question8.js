// Example 1: 'this' inside a method
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is John.

// Example 2: 'this' inside a constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.getDetails = function () {
    console.log(`This car is a ${this.make} ${this.model}.`);
  };
}

const myCar = new Car("Toyota", "Corolla");
myCar.getDetails(); // Output: This car is a Toyota Corolla.

// Example 3: 'this' in global scope
console.log(this); // Output: Window object (in browser) or global object (in Node.js)
