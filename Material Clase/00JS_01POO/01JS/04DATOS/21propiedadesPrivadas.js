class Temperature {

  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return this.#celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.#celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.fahrenheit)
console.log(Temperature.fromFahrenheit(90).fahrenheit)
console.log(temp.celsius); // → 30

let boil = Temperature.fromFahrenheit(212);
console.log(boil.celsius); // → 100
console.log(boil.fahrenheit)