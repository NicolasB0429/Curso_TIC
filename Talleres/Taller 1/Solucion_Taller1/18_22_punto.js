{
    /*
    18.Crear un objeto persona:
    Crea un objeto llamado persona con propiedades como nombre, edad y género
    */
    const objeto = {
        nombre: "Nicolas",
        edad: 23,
        genero: "M"
    }
    console.log("Punto 18:")
    console.log(objeto);

    /*
    19.Acceder a las propiedades del objeto:
    Accede e imprime en la consola las propiedades del objeto persona creado en el ejercicio anterior.
    */
    console.log("Punto 19:")
    console.log("Nombre:",objeto.nombre);
    console.log("Edad:",objeto.edad);
    console.log("Genero",objeto.genero);
    
    /*
    20.Modificar una propiedad del objeto:
    Modifica la propiedad edad del objeto persona y muestra el objeto actualizado en la consola.
    */
    console.log("Punto 20:")
    objeto.edad=20;
    console.log(objeto);

    /*
    21.Agregar una nueva propiedad al objeto:
    Agrega una propiedad llamada "ocupación" al objeto persona y asigna un valor.
    */
    console.log("Punto 21:")
    objeto.numero = "3023641004";
    console.log(objeto);

    /*
    22.Eliminar una propiedad del objeto:
    Elimina la propiedad género del objeto persona y muestra el objeto actualizado en la consola.
    Iterar sobre las propiedades de un objeto:
    */
    console.log("Punto 22:")
    delete objeto.genero;
    console.log(objeto);
    
}