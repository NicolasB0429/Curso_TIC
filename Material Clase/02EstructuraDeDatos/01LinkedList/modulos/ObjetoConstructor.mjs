
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

function Objeto(value, data) {
  this.value = value;
  this.data = data;
}

Objeto.prototype.toString = () => {
  return ` ${this.value} : ${this.data} `;
};

Objeto.prototype.compareTo = function (value) {
  if (!isNaN(value)) {
    return value > this.value ? 1 : value == this.value ? 0 : -1;
  } else {
    return value > this.data ? 1 : value == this.data ? 0 : -1;
  }
};

Objeto.prototype.equals = function (value) {
  return value.value == this.value && value.data == this.data ? 1 : 0;
};

export let objetoConstructor = [];
for (let i = 0, y = 0; i < data.length; i += 2, y++) {
  objetoConstructor[y] = new Objeto(data[i], data[i + 1]);
}
