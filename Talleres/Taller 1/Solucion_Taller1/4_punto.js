/*
4.Cajero automático:
Dado un valor por retirar . Verifica si el monto es menor o igual al saldo disponible en la cuenta.
Si es así, realiza la transacción y muestra el saldo restante; de lo contrario, muestra un mensaje de error.
La cuenta debe ser representada con un objeto que contenga: nombre, saldo, retiro(), deposito().
*/
{
    const cuenta = {
        nombre: "Nicolas",
        saldo: 0,
        
        deposito: function(valor) {
            this.saldo = this.saldo + valor;
            console.log(this.nombre, " su nuevo saldo es de: ", this.saldo);
        },

        retiro: function(valor) {
            if (valor <= this.saldo) {
                this.saldo = this.saldo - valor;
                console.log("Retiro completado, su saldo quedó en: ", this.saldo);
            } else {
                console.log("El monto solicitado excede el saldo disponible para ", this.nombre);
            }
        }
    };

    let deposito = prompt("Ingrese el valor a depositar");
    cuenta.deposito(parseInt(deposito));

    let retiro = prompt("Ingrese el valor a retirar");
    cuenta.retiro(parseInt(retiro));
}
