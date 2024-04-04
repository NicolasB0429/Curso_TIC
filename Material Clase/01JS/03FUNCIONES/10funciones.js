const cuadrado = function(x) {
    return x * x;
};
console.log("cuadrado:",cuadrado(12));
    
const redondea = function(n, step) {
    let resto = n % step;
    return n - resto + (resto < (step / 2) ? 0 : step);
};
console.log("redondea:",redondea(23, 10));

function redondeaEstandar(n, step) {
    let resto = n % step;
    return n - resto + (resto < (step / 2) ? 0 : step);
};
console.log("redondea:",redondeaEstandar(27, 10));
    