/*
11.Suma de números pares:
Calcula la suma de todos los números pares del 1 al 100 utilizando un bucle. Muestra el resultado.
*/
{
    let suma = 0;
    for(i=0; i<=100; i+=2){
        suma = suma + i;
    }

    console.log("La suma de los número pares del 1 al 100 es de: ", suma);
}