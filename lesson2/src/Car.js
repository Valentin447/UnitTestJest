const {Vehicle} = require('./Vehicle.js');

class Car extends Vehicle {
  #numWheels;
  constructor(company, model, year) {
    super(company, model, year);
    this.#numWheels = 4;
  }
  getNumWheels() { return this.#numWheels; }
  testDrive() { super.setSpeed(60); }
  toString() { return `This car is a “ + year + “ “ + make + “ “ + model + `;}
}

module.exports = {Car};