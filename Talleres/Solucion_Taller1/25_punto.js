/*
25.Comparar objetos:
Crea dos objetos con las mismas propiedades pero con diferentes valores.
Compara los dos objetos para verificar si son iguales y muestra el resultado en la consola
*/
{
    const persona1 ={
        nombre: "Nicolas",
        edad: 23
    }

    const persona2 ={
        nombre: "Camilo",
        edad: 23
    }

    // Variable para indicar si los objetos son iguales
    let sonIguales = true;

    // Iterar sobre las propiedades de persona1
    for (let propiedad in persona1) {
        // Verificar si la propiedad existe en persona2 y si los valores son iguales
        if (persona1[propiedad] !== persona2[propiedad]) {
            sonIguales = false;
            break; // Detener si se encuentra diferencia
        }
    }

    // Mostrar el resultado
    if (sonIguales) {
        console.log("Los objetos son iguales.");
    } else {
        console.log("Los objetos son diferentes.");
    }
}
