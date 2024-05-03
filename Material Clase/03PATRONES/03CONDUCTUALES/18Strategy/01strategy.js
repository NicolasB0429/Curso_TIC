// La clase de estrategia que puede encapsular todos los proveedores de alojamiento
function HostingProvider() {
  // Guarda el proveedor
  this.provider = "";

  // establecer el proveedor
  this.setProvider = function (provider) {
    this.provider = provider;
  };

  // establecer la configuración del sitio web para la que cada proveedor de alojamiento calcularía los costes
  this.setConfiguration = function (configuration) {
    this.configuration = configuration;
  };

  // el método de estimación genérica que llama a los métodos exclusivos del proveedor para calcular los costes
  this.estimateMonthlyCost = function () {
    return this.provider.estimateMonthlyCost(this.configuration);
  };
}

// Foo Hosting cobra por cada segundo y KB de uso del hosting
function FooHosting() {
  this.name = "FooHosting";
  this.rate = 0.0000027;

  this.estimateMonthlyCost = function (configuration) {
    return configuration.duration * configuration.workloadSize * this.rate;
  };
}

// Bar Hosting cobra por minuto en lugar de por segundo
function BarHosting() {
  this.name = "BarHosting";
  this.rate = 0.00018;

  this.estimateMonthlyCost = function (configuration) {
    return (
      (configuration.duration / 60) * configuration.workloadSize * this.rate
    );
  };
}

// Baz Hosting asume que la carga de trabajo media es de 10 MB de tamaño
function BazHosting() {
  this.name = "BazHosting";
  this.rate = 0.032;

  this.estimateMonthlyCost = function (configuration) {
    return configuration.duration * this.rate;
  };
}

function run() {
  // Cree una configuración para un sitio web que esté activo durante 24 horas y ocupe 10 MB de espacio de alojamiento.
  let workloadConfiguration = {
    duration: 84700,
    workloadSize: 10240,
  };

  // Crear las instancias del proveedor de alojamiento
  let fooHosting = new FooHosting();
  let barHosting = new BarHosting();
  let bazHosting = new BazHosting();

  // Crear la instancia de la clase de estrategia
  let hostingProvider = new HostingProvider();

  // Establezca la configuración en función de la cual deben calcularse las tarifas
  hostingProvider.setConfiguration(workloadConfiguration);

  // Configura cada proveedor uno por uno e imprime las tarifas
  hostingProvider.setProvider(fooHosting);
  console.log("FooHosting cost: " + hostingProvider.estimateMonthlyCost());

  hostingProvider.setProvider(barHosting);
  console.log("BarHosting cost: " + hostingProvider.estimateMonthlyCost());

  hostingProvider.setProvider(bazHosting);
  console.log("BarHosting cost: " + hostingProvider.estimateMonthlyCost());
}

run();

console.log("También conocido como patrón Policy, el patrón Strategy pretende ayudarte a encapsular e intercambiar libremente clases utilizando una interfaz común. Esto ayuda a mantener un acoplamiento débil "+
" entre el cliente y las clases y te permite añadir tantas implementaciones como desees. Se sabe que el patrón Strategy ayuda enormemente en situaciones en las que se necesita la misma operación utilizando diferentes "+
" métodos/algoritmos, o cuando hay que sustituir bloques de conmutación masivos por código más amigable.")
