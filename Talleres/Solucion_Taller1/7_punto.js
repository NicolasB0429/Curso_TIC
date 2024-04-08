/*
7.Verificar si un año es bisiesto:
Dado un año.
Verifica si el año es bisiesto (divisible entre 4 y no divisible entre 100, excepto si también es divisible
entre 400).
Muestra el resultado.

*/
{
    let año = prompt("Digita el año: ");
    con_1 = año%4
    con_2 = año%100
    con_3 = año%400

    // Es dividible por 4 y no divisible entre 100
    if (con_1==0 && con_2 !=0){
        if(con_3 == 0){
            console.log("El año no ",año," es biciesto");
        }
        else{
            console.log("El año ",año,"  es biciesto");
        }
    }
    else{
        console.log("El año no ",año," es biciesto");
    }


}