export class HashTable {
  values;
  numberOfValues;
  size;

  constructor(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  calculateHash(key) {
    //console.log("k", key, "string", key.toString(), "length", key.toString().length,'size',this.size);
    return key.toString().length % this.size;
  }

  add(key, value) {
    //calcula el valor hash (clave)
    const hash = this.calculateHash(key);
    //console.log("k", key, " : v", value,"hash", hash);
    if (!this.values.hasOwnProperty(hash)) {
      /* Si los valores no tienen el valor hash,
       se añáde al objeto values, y se hace  igual
       a un objeto vacío.
      */
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      /*Si el hash no tiene la clave
       se incrementa el número de valores a medida que se añade un nuevo valor.
      */
      this.numberOfValues++;
    }
    // Establece el valor de la clave del hash igual al nuevo valor.
    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let string = "";
    for (const value in this.values) {
      for (const key in this.values[value]) {
        string += `${this.values[value][key]} `;
      }
    }
    return string
  }
}
