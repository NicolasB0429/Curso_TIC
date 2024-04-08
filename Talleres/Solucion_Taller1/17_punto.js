/*
17.Contador de números primos
Dado un número entero positivo, determine cuántos números primos existen desde el 1 hasta el número
dado.
*/
{
    let num = prompt("Digite un número entero positivo:")
    num = parseInt(num);
    let suma = 0; 

    if (Number.isInteger(num)){
        for(i=2; i<=num; i++){
            let esPrimo = true;
            for (j = 2; j <= Math.sqrt(i); j++) {
                // Si el número es divisible por algún número en el rango, no es primo
                if (i % j === 0) {
                    //número no es primo
                    esPrimo = false;
                    break;
                }
            }
            // Cuando el número es primo
            if (esPrimo){
                suma++;
            }
        }
        console.log("Los números primos del 1 al",num,"son",suma);
    }

    else{
        console.log("El número no es entero");
    }
}