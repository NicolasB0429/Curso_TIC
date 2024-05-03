
function Product(name, price) {

   this.name = name
   this.price = price

   this.getTotalPrice = function() {
       return this.price
   }
}


function Box(name) {

   this.contents = []
   this.name = name
   
   this.add = function(content){
       this.contents.push(content)
   }

   this.remove = function() {
       var length = this.contents.length;
       for (var i = 0; i < length; i++) {
           if (this.contents[i] === child) {
               this.contents.splice(i, 1);
               return;
           }
       }
   }

   this.getContent = function(position) {
       return this.contents[position]
   }

   this.getTotalCount = function() {
       return this.contents.length
   }

   this.getTotalPrice = function() {
       let totalPrice = 0;

       for (let i=0; i < this.getTotalCount(); i++){
           totalPrice += this.getContent(i).getTotalPrice()
       }

       return totalPrice
   }
}

function run() {

   const mobilePhone = new Product("mobile phone", 1000)
   const phoneCase = new Product("phone case", 30)
   const screenProtector = new Product("screen protector", 20)

   const pen = new Product("pen", 2)
   const pencil = new Product("pencil", 0.5)
   const eraser = new Product("eraser", 0.5)
   const stickyNotes = new Product("sticky notes", 10)

   const electronicsBox = new Box("electronics")
   electronicsBox.add(mobilePhone)
   electronicsBox.add(phoneCase)
   electronicsBox.add(screenProtector)
  
   const stationeryBox = new Box("stationery")
   stationeryBox.add(pen)
   stationeryBox.add(pencil)
   stationeryBox.add(eraser)
   stationeryBox.add(stickyNotes)

   const package = new Box('package')
   package.add(electronicsBox)
   package.add(stationeryBox)

   console.log("\n\Total order price: " + package.getTotalPrice())
   console.log("\nTotal order price: " + electronicsBox.getTotalPrice());
   console.log("\nTotal order price: " + stationeryBox.getTotalPrice());

}

console.log("El patrón de diseño Composite ayuda a estructurar y gestionar fácilmente objetos y entidades similares. "+
"La idea básica del patrón Composite es que los objetos y sus contenedores lógicos pueden representarse utilizando "+
"una única clase abstracta (que puede almacenar datos/métodos relacionados con el objeto y referencias a sí misma para el contenedor)"+
"Tiene más sentido utilizar el patrón Composite cuando el modelo de datos se asemeja a una estructura de árbol. Sin embargo, "+
"no se debe intentar convertir un modelo de datos no arbóreo en un modelo de datos arbóreo sólo por utilizar el patrón Composite, "+
"ya que hacerlo a menudo puede restarle mucha flexibilidad.")

run();