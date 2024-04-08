/*
6.Calculadora de descuentos:
Dado el precio de un producto y el porcentaje de descuento.
Calcula el precio final después del descuento.
Muestra el precio final.

*/

{

    // Arreglo de objetos
    let catalogo = [
        {
            nomber: "papa",
            precio: 23,
            descuento: 15,
            calculo: function(){
                return this.precio - (this.precio*0.15)
            }
        },

        {
            nomber: "arroz",
            precio: 50,
            descuento: 20,
            calculo: function(){
                return this.precio - (this.precio*0.2)
            }
        },

        {
            nomber: "aceite",
            precio: 55,
            descuento: 40,
            calculo: function(){
                return this.precio - (this.precio*0.4)
            }
        },

        {
            nomber: "huevos",
            precio: 40,
            descuento: 10,
            calculo: function(){
                return this.precio - (this.precio*0.1)
            }
        },

        {
            nomber: "carne",
            precio: 60,
            descuento: 60,
            calculo: function(){
                let retorno = this.precio - (this.precio*0.6);
                return retorno
            }
        }
    ]

    for (const valor of catalogo.entries()){
        //console.log(valor[0]); //Inidice
        //console.log(valor[1]); //Objeto
        let objet = valor[1]
        for (let propiedad in objet) {
            console.log(": ", propiedad + ":", objet[propiedad]);   
        }
        console.log(objet.calculo());
        //console.log("Valor con descuento: ", valor[1].calculo);
    }
}