class Vehicle{
  #company;
  #model;
  #yearRelease;
  #speed = 0;
  constructor(company, model, year) {
    this.#company = company;
    this.#model = model;
    this.#yearRelease = year;
  }
  setSpeed(newSpeed){this.#speed = newSpeed; }
  park() { this.#speed = 0; }
  getCompany() { return this.#company; }
  getModel() { return this.#model; }
  getYearRelease() { return this.#yearRelease; }
  getSpeed() { return this.#speed; }
}

module.exports = {Vehicle};