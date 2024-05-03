/*
27.Método en un objeto:
Crea un objeto llamado "circulo" con una propiedad "radio" y un método llamado "calcularArea" que
calcule y devuelva el área del círculo
*/
{
    const circulo = {
        radio: 5,

        calcularArea:function(){
            const pi = Math.PI;
            let area = pi * this.radio ** 2;
            area = area.toFixed(4); // 4 Decimales

            return area;
        }
    }
    
    // Calcular el área del círculo y mostrar el resultado
    console.log("El área del círculo es:", circulo.calcularArea())
}