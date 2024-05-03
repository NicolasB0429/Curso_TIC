/*
24.Combinar dos objetos:
Crea dos objetos diferentes que representen personas con diferentes propiedades.
Combina los dos objetos en uno nuevo y muestra el resultado en la consola.
*/
{
    const persona ={
        nombre: "Nicolas",
        edad: 23
    }

    const empleo ={
        cargo: "Jefe",
        area: "TIC"
    }

    const obj_Combinado = Object.assign({}, persona, empleo);
    console.log(obj_Combinado);
}