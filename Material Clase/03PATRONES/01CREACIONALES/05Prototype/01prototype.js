function Document() {
  this.header = "Acme Co";
  this.footer = "For internal use only";
  this.pages = 2;
  this.text = "";

  this.addText = function (text) {
    this.text += text;
  };

  this.printInfo = function () {
    console.log(
      "\n\nHeader: " +
        this.header +
        "\nFooter: " +
        this.footer +
        "\nPages: " +
        this.pages +
        "\nText: " +
        this.text
    );
  };
}

function DocumentPrototype(baseDocument) {
  this.baseDocument = baseDocument;

  this.clone = function () {
    
    let document = new Document();

    document.header = this.baseDocument.header;
    document.footer = this.baseDocument.footer;
    document.pages = this.baseDocument.pages;
    document.text = this.baseDocument.text;

    return document;
  };
}

function run() {
  let baseDocument = new Document();

  baseDocument.addText(
    "This text was added before cloning and will be common in both documents. "
  );

  let prototype = new DocumentPrototype(baseDocument);

  let doc1 = prototype.clone();
  let doc2 = prototype.clone();

  doc1.pages = 3;

  doc1.addText("This is document 1");
  doc2.addText("This is document 2");

  doc1.printInfo();

  doc2.printInfo();
}

console.log("El patrón de diseño Prototype es una forma rápida y sencilla de crear nuevos objetos a partir de objetos existentes, clonándolos."+
    "Primero se crea un objeto prototipo, que puede clonarse varias veces para crear nuevos objetos. Resulta útil cuando instanciar directamente"+
    "un objeto es una operación que consume más recursos que crear una copia de uno existente.")


run();
