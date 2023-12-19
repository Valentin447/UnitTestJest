const {Vehicle} = require('./Vehicle.js');

class Motorcycle extends Vehicle {
  #numWheels;
  constructor(company, model, year) {
    super(company, model, year);
    this.#numWheels = 2;
  }
  getNumWheels() { return this.#numWheels; }
  testDrive() { super.setSpeed(75); }
  toString() { return `This motorcycle is a “ + year + “ “ + make + “ “ + model + `;}
}

module.exports = {Motorcycle};