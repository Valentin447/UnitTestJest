const {Car} = require('../src/Car.js');
const {Motorcycle} = require('../src/Motorcycle.js');
const {Vehicle} = require('../src/Vehicle.js');

test('Объект Car создается с 4-мя колесами', ()=>{
  expect(new Car('Audi', 'Q7', 3).getNumWheels()).toBe(4);
})

test('Объект Motorcycle создается с 2-мя колесами', ()=>{
  expect(new Motorcycle('Ural', 'Gear Up', 1).getNumWheels()).toBe(2);
})

test('Объект Car развивает скорость 60 в режиме тестового вождения', ()=>{
  const car = new Car('Toyta', 'Camry', 3);
  car.testDrive();
  expect(car.getSpeed()).toBe(60);
})

test('Объект Motorcycle развивает скорость 75 в режиме тестового вождения', ()=>{
  const motorcycle = new Motorcycle('Honda', 'CRF300L', 2);
  motorcycle.testDrive();
  expect(motorcycle.getSpeed()).toBe(75);
})

test('В режиме парковки (сначала testDrive, потом park, т.е эмуляция движения транспорта) машина останавливается (speed = 0)', ()=>{
  const car = new Car('Lada', 'Granta', 1);
  car.testDrive();
  car.park();
  expect(car.getSpeed()).toBe(0);
})

test('В режиме парковки (сначала testDrive, потом park  т.е эмуляция движения транспорта) мотоцикл останавливается (speed =0)', ()=>{
  const motorcycle = new Motorcycle('BMV', 'X5', 10);
  motorcycle.testDrive();
  motorcycle.park();
  expect(motorcycle.getSpeed()).toBe(0);
})

test('Экземпляр объекта Car также является экземпляром транспортного средства', ()=>{
  expect(Car.prototype instanceof Vehicle).toBe(true);
})