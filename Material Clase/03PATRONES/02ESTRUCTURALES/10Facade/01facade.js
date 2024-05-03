/**
 * Se está tratando de construir una tienda en línea. Tendrá múltiples componentes y
 * lógica de negocio compleja. En el ejemplo de abajo, se puede observar un pequeño segmento de una tienda online 
 * compuesta usando el patrón de diseño Facade. Las clases manager y helper se definen en primer lugar.
 */

function CartManager() {
  this.getItems = function () {
    // lógica para retornar items
    return [];
  };

  this.clearCart = function () {
    // lógica para colocar a ceros la tarjeta
  };
}

function InvoiceManager() {
  this.createInvoice = function (items) {
    // lógica para crear una factura
    return {};
  };

  this.notifyCustomerOfFailure = function (invoice) {
    // lógica para notificar a un cliente
  };

  this.updateInvoicePaymentDetails = function (paymentResult) {
    // lógica para actualizar la factura
  };
}

function PaymentProcessor() {
  this.processPayment = function (invoice) {
    // lógica para iniciar y procesar un pago
    return {};
  };
}

function WarehouseManager() {
  this.prepareForShipping = function (items, invoice) {
    // lógica para organizar los items a ser vendidos
  };
}

/*
Aquí es donde entra facade. Se crea una interfaz adicional en la parte superior de las
interfaces existentes para definir claramente la lógica de negocio. Esta interfaz expone
métodos muy simples y de alto nivel para el entorno de llamada.
*/

function OnlineStore() {

  this.name = "Online Store";

  this.placeOrder = function () {
    let cartManager = new CartManager();
    let items = cartManager.getItems();

    let invoiceManager = new InvoiceManager();
    let invoice = invoiceManager.createInvoice(items);

    let paymentResult = new PaymentProcessor().processPayment(invoice);
    invoiceManager.updateInvoicePaymentDetails(paymentResult);

    if (paymentResult.status === "success") {
      new WarehouseManager().prepareForShipping(items, invoice);
      cartManager.clearCart();
    } else {
      invoiceManager.notifyCustomerOfFailure(invoice);
    }
  };
}

console.log(
  "Al construir la mayoría de las aplicaciones del mundo real, la lógica de negocio suele resultar bastante compleja" +
    "cuando se termina. Puede que se acabe con múltiples objetos y métodos implicados en la ejecución de las operaciones principales" +
    "de la aplicación. Hacer un seguimiento de sus inicializaciones, dependencias, el orden correcto de ejecución de los métodos, etc.," +
    "puede ser bastante complicado y propenso a errores si no se hace correctamente. El patrón de diseño Facade ayuda a crear una" +
    "abstracción entre el entorno que invoca las operaciones mencionadas y los objetos y métodos implicados en la realización" +
    "de esas operaciones. Esta abstracción alberga la lógica para inicializar los objetos, rastrear sus dependencias y otras actividades " +
    "importantes. El entorno de llamada no tiene información sobre cómo se ejecuta una operación. Puede actualizar libremente la lógica " +
    "sin realizar ningún cambio de ruptura en el cliente llamante."
);

/*
    El entorno de llamada desconoce lo que ocurre cuando alguien pulsa un botón para
    realizar el pedido. Se puede cambiar fácilmente la lógica de negocio subyacente sin romper
    el entorno de llamada.
*/

function run() {
  let onlineStore = new OnlineStore();

  onlineStore.placeOrder();
}
