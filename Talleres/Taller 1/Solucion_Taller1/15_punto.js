/*
15.Suma de los elementos de un arreglo:
Crea un arreglo de números.
Calcula la suma de todos los elementos del arreglo utilizando un bucle.
*/
{
    let arreglo = []; //Arreglo de números

    //  Arreglo de 50 números
    for (i = 0; i < 50; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001); //número aleatorio entre 0 y 1000
        arreglo.push(numeroAleatorio); //Agrega al arreglo
    }

    let suma = 0;
    
    //Suma del arreglo
    for(i=0; i<arreglo.length; i++){
        suma = suma + arreglo[i];
    }

    console.log("La suma de lo números del arreglo es de:",suma);
}