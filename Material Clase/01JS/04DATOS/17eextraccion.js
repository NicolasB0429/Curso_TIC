
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
      medidas: {
        peso: '1kg',
        medida: '1m'
      },
      fabricacion: {
        pais: 'China'
      }
    }
  }
  
  let { nombre, informacion, informacion: { medidas: {peso, medida } } }= producto
  
  console.log('\n',nombre)
  console.log(informacion)
  console.log(peso)
  console.log(medida)
  
  const {  informacion: { fabricacion, fabricacion: { pais } } } = producto
  
  console.log('\n',nombre)
  console.log(informacion)
  console.log(fabricacion)
  console.log(pais)
  