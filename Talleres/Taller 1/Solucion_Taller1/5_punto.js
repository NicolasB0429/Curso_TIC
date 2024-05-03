/*
5.Juego de adivinar el número:
Genera un número aleatorio entre 1 y 100.
Pide al usuario que adivine el número.
Proporciona pistas (mayor, menor) hasta que el usuario adivine correctamente.
El usuario tiene 10 opciones
*/
{
    // número random
    let a_num = Math.floor(Math.random() * (100 - 1) + 1);
    //console.log(a_num)

    for (i=0; i<10; i++){
        let num_ususario = prompt("Adivina el número:");

        if(a_num == num_ususario){
            console.log("Felicidades adivinaste el número en el intento #", i);
            break;
        }

        // Si no es igual
        else{
            if(num_ususario<a_num){
                console.log("El número es mayor");
            }
            else{
                console.log("El número es menor");
            }
        }
    }
}