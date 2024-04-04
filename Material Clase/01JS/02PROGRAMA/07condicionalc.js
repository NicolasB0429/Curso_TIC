
let elDato = prompt("Digite un número");
let elNumero = Number(elDato);
console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);
if (!Number.isNaN(elNumero)) {
    console.log("Tu número es la raíz cuadrada de " +
    elNumero * elNumero);
} else {
    console.log("Entrada incorrecta: ",elDato)
}


