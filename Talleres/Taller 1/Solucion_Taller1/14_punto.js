/*
14.Generador de patrón de asteriscos
Dado un número, genere un patrón de asteriscos con el número de filas igual al número dado
*/
{
    let n_filas = prompt("Digite el número de filas que va a tener el patrón: ");
    let linea = '';

    for(let i = 1; i <= n_filas; i++){
        linea = ''; //Reinicia linea
        for(let j = 1; j <= i; j++){
            linea += "*";
        }
        console.log(linea);
    }
}