let control = 3
let i = 1
let elDato
do{
    elDato = prompt("Digite el número",i);
    let elNumero = Number(elDato);
    if (!Number.isNaN(elNumero)) {
        if (elNumero < 100) {
            console.log("el número",elNumero,"es menor que 100");
        } else if (elNumero < 1000) {
            console.log("el número ",elNumero," está entre 101 y 999");
        } else {
            console.log("el número",elNumero,"es mayor a 1000");
        }
    } else {
        console.log("Entrada incorrecta: ",elDato)
    }
    i++;
    elDato = prompt("Desea probar otro número (s/n)");
    if(elDato !== 'n' || elDato !== 'N')
        break;
} while (true)
