/*
12.Generador de tabla de multiplicar:
Dado un número.
Muestra la tabla de multiplicar del número ingresado del 1 al 10
*/
{
    let numero = prompt("Digite un número");

    console.log("La tabla de multiplicar de su número digitado hasta el 10 es de: ");
    for(i=1; i<11; i++){
        console.log(numero,"*",i,"=", numero*i);
    }
}