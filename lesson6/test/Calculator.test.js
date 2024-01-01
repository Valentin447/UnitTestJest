const {Calculator} = require('../src/Calculator.js');

let calc;
beforeEach(() => {
calc = new Calculator();
});

afterEach(() => {
calc = null;
});

test('Среднее значение второго списка больше', ()=>{
  expect(calc.calculat([1, 2, 3], [4, 5, 6])).toBe('Второй список имеет большее среднее значение');
})

test('Среднее значение первого списка больше', ()=>{
  expect(calc.calculat([6, 5, 4], [3, 2, 3])).toBe('Первый список имеет большее среднее значение');
})

test('Средние значения равны', ()=>{
  expect(calc.calculat([3, 2, 1], [1, 2, 3])).toBe('Средние значения равны');
})

test('Метод average() возвращает 2 при значениях 1, 2, 3', ()=>{
  expect(calc.average([1, 2, 3])).toBe(2);
})