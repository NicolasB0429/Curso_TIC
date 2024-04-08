/*
26.Función para crear objetos:
Crea una función llamada "crearProducto" que tome parámetros como nombre, precio y cantidad.
La función debe devolver un objeto que represente un producto con las propiedades proporcionadas.
*/
{
    function crearProducto(nombre, precio, cantidad){
        const nuevoObjeto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };

        return nuevoObjeto;
    }

    producto1 = crearProducto("arroz", 5000, 3);
    console.log(producto1);
}