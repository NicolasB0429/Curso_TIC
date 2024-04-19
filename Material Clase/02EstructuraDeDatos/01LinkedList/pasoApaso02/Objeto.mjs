export class Objeto {
  dato;
  cadena;

  constructor(dato, cadena) {
    this.dato = dato;
    this.cadena = cadena;
  }

  toString = () => {
    return `dato: ${this.dato} : cadena: ${this.cadena}`;
  };

  compareTo = (value) => {
    if (typeof value == "string") {
      return value > this.cadena ? -1 : value < this.cadena ? 1 : 0;
    } else {
      return value > this.dato ? -1 : value < this.dato ? 1 : 0;
    }
  };

  equals = (value) => {
    if (this.dato == value.dato && this.cadena == value.cadena) {
      return 1;
    }
    return -1;
  };
}

/* 
let prueba1 = new Objeto(100, "cien");
let prueba2 = new Objeto(101, "cien");
console.log(prueba1.toString());
console.log(prueba1.compareTo(100));
console.log(prueba1.compareTo("cien"));
console.log(prueba1.compareTo(101));
console.log(prueba1.equals(prueba2))
prueba2 = prueba1
console.log(prueba1.equals(prueba2));
 */