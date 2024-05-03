/*
9.Validador de contraseña:
Dada una contraseña.
Verifica si la contraseña cumple con ciertos requisitos (longitud mínima, presencia de letras
mayúsculas, minúsculas y números).
Muestra un mensaje indicando si la contraseña es válida o no.
*/

{    
    let num_check=0;

    while (num_check<4){
        let contraseña = prompt("Digite la contraseña: ");
        // Reinicio de la variable
        num_check=0;

        //1 longitud mínima
        if(contraseña.length>3){
            num_check++;
        }
        else{
            console.log("No cumple longitud");
        }
        
        //2 presencia de letras mayúsculas
        for(i=0; i<contraseña.length; i++){
            if (contraseña[i] == contraseña[i].toUpperCase());
                num_check++;
                break;
        }

        //3 minúsculas
        for(i=0; i<contraseña.length; i++){
            if (contraseña[i] == contraseña[i].toLowerCase());
                num_check++;
                break;
        }

        // 4. Presencia de números
        for(let i = 0; i < contraseña.length; i++){
            if (!isNaN(parseInt(contraseña[i]))){
                num_check++;
                break;
            }
        }

        // Verificación de la cantidad de requisitos cumplidos
        if (num_check === 4) {
            console.log("Contraseña válida");
        } else {
            console.log("Contraseña inválida");
        }
    }

}