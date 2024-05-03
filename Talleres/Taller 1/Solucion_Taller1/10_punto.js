/* 
10.Calculadora de días entre fechas:
Dada dos fechas en formato dd/mm/aaaa, del mismo mes y mismo año.
Calcula la diferencia en días entre las dos fechas.
Muestra el resultado.
*/

{
    var fecha1 = prompt("Por favor, ingrese la primera fecha en formato día/mes/año:");

    // Divide la cadena en partes
    var partesFecha1 = fecha1.split('/');

    // Verifica si hay tres partes (día, mes, año)
    if (partesFecha1.length === 3) {
        var dia1 = parseInt(partesFecha1[0]);
        var mes1 = parseInt(partesFecha1[1]);
        var año1 = parseInt(partesFecha1[2]);

        var fecha2 = prompt("Por favor, ingrese la segunda fecha en formato día/mes/año:");
        // Divide la cadena en partes
        var partesFecha2 = fecha2.split('/');

        if (partesFecha2.length === 3) {
            var dia2 = parseInt(partesFecha2[0]);
            var mes2 = parseInt(partesFecha2[1]);
            var año2 = parseInt(partesFecha2[2]);
            
            // Validación que los meses y años coincidan
            if(mes1 =! mes2 || año1 != año2){
                if(mes1 != mes2){
                    console.log("Los meses no coinciden");
                }

                if(año1 != año2){
                    console.log("Los años no coinciden");
                }
            }

            // Los meses y años coinciden
            else{
                if(dia1 != 0 && dia2!=0){
                    console.log("La diferencia de días es de: ", Math.abs(dia1-dia2));
                }
                else{
                    console.log("Algun día esta mal digitado")
                }
            }
        }

        else{
            console.log("Fecha 2 incorrecta");
        }
    }

    else{
        console.log("Fecha 1 incorrecta");
    }
}