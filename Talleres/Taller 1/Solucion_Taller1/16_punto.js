/*
16.Verificar si es número primo
Dado un número entero positivo, determine si el número es primo ó no.
*/
{
    let num = prompt("Digite el número entero que quiere identificar si es primo o no:")
    num = parseInt(num);
    let verificar = 0;

    if (Number.isInteger(num)){
        // Itera desde 2 hasta la raíz cuadrada del número
        for (i = 2; i <= Math.sqrt(num); i++) {
            // Si el número es divisible por algún número en el rango, no es primo
            if (num % i === 0) {
                console.log("El número",num,"no es primo");
                verificar = 1;
                break;
            }
        }
        if (verificar == 0){
            console.log("El numero",num,"si es primo")
        }
    }

    else{
        console.log("El número no es entero");
    }
}