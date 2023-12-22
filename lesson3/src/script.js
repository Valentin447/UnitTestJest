function evenOddNumber(number) {
  if (typeof number === "number" && !isNaN(number)) {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  }
  throw new Error("Not number");
}

function numberInInterval(number) {
  if (typeof number === "number" && !isNaN(number)) {
    if (number >= 25 && number <= 100) {
      return true;
    }
    return false;
  }
  throw new Error("Not number");
}

module.exports = { evenOddNumber, numberInInterval };
