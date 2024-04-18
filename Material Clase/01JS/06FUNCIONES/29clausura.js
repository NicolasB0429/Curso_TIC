function multiplicador(factor) {
  return (numero) => numero * factor;
}

// console.log(multiplicador(4)(3));

let dosVeces = multiplicador(2);
console.log("5", dosVeces(5)); //10
console.log("10", dosVeces(10)); //20

dosVeces = multiplicador(5);
console.log("5*5", dosVeces(5)); //25
console.log("10*5", dosVeces(10)); //50

