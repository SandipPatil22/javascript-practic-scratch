// ***********************************************Classes*************************************************************

// Defination -: A class in javascript is a templete for creating objects. it enscapsulates data and behavior, allowing for the creation of multiple instances wirh shared properties and method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // instance method
  introduction() {
    console.log(`hi, i am ${this.name}, and i am ${this.age} years old`);
  }
}

// create an instance
const alice = new Person("Sandip", "24");
alice.introduction();

// ***********************************************Static method Classes*************************************************************

// Static method
class claculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(b, c) {
    return b * c;
  }
}

console.log(claculator.add(5, 2));
console.log(claculator.multiply(5, 2));

// ***********************************************Inheritance*************************************************************

class Bird {
  constructor(name) {
    this.name;
  }
  fly() {
    return `${this.name}  is flying`;
  }
}

class Eagle extends Bird {
  fly() {
    return `${this.name} soars high in the sky`;
  }
}

const mybird = new Eagle("majestic Eagle");
console.log(mybird.fly());
