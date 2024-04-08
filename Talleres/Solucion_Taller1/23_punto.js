/*
23.Crear objeto carro
Crear un objeto que represente un carro con propiedades como marca, modelo y año.
Utiliza un bucle para iterar sobre las propiedades del carro e imprime cada una en la consola.
*/
{
    const carro ={
        marca: "Toyota",
        modelo: "Corolla",
        año: 2021
    }

    for(propiedad in carro){
        console.log(propiedad,"=",carro[propiedad]);
    }
}