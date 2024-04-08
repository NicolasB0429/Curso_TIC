/*
13.Contador de vocales:
Dada una palabra o frase.
Cuenta el número de vocales en la palabra o frase utilizando un bucle. Muestra el resultado
*/
{
    let palabra = prompt("Escriba una palabra o frase");
    let suma = 0;

    for(let i = 0; i < palabra.length; i++){
        if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u'){
            suma++;
        }
    }
    console.log("Su palabra o frase tiene", suma, "vocales");
}