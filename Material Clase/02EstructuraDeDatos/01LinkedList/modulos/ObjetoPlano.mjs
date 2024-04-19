export let ObjetoPlano = [
  {
    valor: "cadena1",
    data: 23,
    toString: () => {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
    compareTo: (value) => {
      if (!isNaN(value)) {
        return value > this.value ? 1 : value == this.value ? 0 : -1;
      } else {
        return value > this.data ? 1 : value == this.data ? 0 : -1;
      }
    },
    equals: (value) => {
      return value.value == this.value && value.data == this.data ? 1 : 0;
    },
  },
  {
    valor: "cadena2",
    data: 24,
    toString: () => {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
    compareTo: (value) => {
      if (!isNaN(value)) {
        return value > this.value ? 1 : value == this.value ? 0 : -1;
      } else {
        return value > this.data ? 1 : value == this.data ? 0 : -1;
      }
    },
    equals: (value) => {
      return value.value == this.value && value.data == this.data ? 1 : 0;
    },
  },
  {
    valor: "cadena3",
    data: 25,
    toString: () => {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
    compareTo: (value) => {
      if (!isNaN(value)) {
        return value > this.value ? 1 : value == this.value ? 0 : -1;
      } else {
        return value > this.data ? 1 : value == this.data ? 0 : -1;
      }
    },
    equals: (value) => {
      return value.value == this.value && value.data == this.data ? 1 : 0;
    },
  },
  {
    valor: "cadena4",
    data: 26,
    toString: () => {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
    compareTo: (value) => {
      if (!isNaN(value)) {
        return value > this.value ? 1 : value == this.value ? 0 : -1;
      } else {
        return value > this.data ? 1 : value == this.data ? 0 : -1;
      }
    },
    equals: (value) => {
      return value.value == this.value && value.data == this.data ? 1 : 0;
    },
  },
  {
    valor: "cadena5",
    data: 27,
    toString: () => {
      return `valor: ${this.valor}, data: ${this.data}`;
    },
    compareTo: (value) => {
      if (!isNaN(value)) {
        return value > this.value ? 1 : value == this.value ? 0 : -1;
      } else {
        return value > this.data ? 1 : value == this.data ? 0 : -1;
      }
    },
    equals: (value) => {
      return value.value == this.value && value.data == this.data ? 1 : 0;
    },
  },
];
