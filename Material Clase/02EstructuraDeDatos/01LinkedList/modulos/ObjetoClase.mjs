let data = [
  1,
  "data1",
  2,
  "data2",
  3,
  "data3",
  4,
  "data4",
  5,
  "data5",
  6,
  "data6",
  7,
  "data7",
  8,
  "data8",
  9,
  "data9",
];

export class ObjetoClase {
  value;
  data;

  constructor(value, data) {
    this.value = value;
    this.data = data;
  }

  toString = () => {
    return ` ${this.value} : ${this.data} `;
  };

  compareTo = (value) => {
    if (!isNaN(value)) {
      return value > this.value ? 1 : value == this.value ? 0 : -1;
    } else {
      return value > this.data ? 1 : value == this.data ? 0 : -1;
    }
  };

  equals = (value) => {
    return value.value == this.value && value.data == this.data ? 1 : 0;
  };

  get value() {
    return this.value;
  }

  get data() {
    return this.data;
  }

  set value(value) {
    this.value = value;
  }

  set data(value) {
    this.data = value;
  }
}

export let objetoClase = [];
for (let i = 0; i < data.length; i += 2) {
  objetoClase[i] = new ObjetoClase(data[i], data[i + 1]);
}

console.log(objetoClase.toString())
