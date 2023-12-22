const { evenOddNumber, numberInInterval } = require("../src/script.js");

describe("Функция evenOddNumber", () => {
  test("2 четное число", () => {
    expect(evenOddNumber(2)).toBe(true);
  });

  test("0 четное число", () => {
    expect(evenOddNumber(2)).toBe(true);
  });

  test("3 не четное число", () => {
    expect(evenOddNumber(3)).toBe(false);
  });

  test("Передаем строку", () => {
    const eON = () => {
      evenOddNumber("qqq");
    };
    expect(eON).toThrow(Error);
  });

  test("Передаем NaN", () => {
    const eON = () => {
      evenOddNumber(NaN);
    };
    expect(eON).toThrow(Error);
  });
});

describe("Функция numberInInterval", () => {
  test("-50 не входит в интервала", () => {
    expect(numberInInterval(-50)).toBe(false);
  });

  test("50 входит в интервал", () => {
    expect(numberInInterval(50)).toBe(true);
  });

  test("100000 не входит в интервал", () => {
    expect(numberInInterval(1_000_000)).toBe(false);
  });

  test("Передаем строку", () => {
    const nII = () => {
      numberInInterval("qqq");
    };
    expect(nII).toThrow(Error);
  });

  test("Передаем NaN", () => {
    const nII = () => {
      numberInInterval(NaN);
    };
    expect(nII).toThrow(Error);
  });

});

