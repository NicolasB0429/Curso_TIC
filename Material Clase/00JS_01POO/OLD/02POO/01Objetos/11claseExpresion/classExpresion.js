
'use strict'

console.log('\n Clase anónima')

const Employee = class {

  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

let empl = new Employee('Harry Potter', 90000)
empl.raiseSalary(10)
console.log('empl:', empl) 

console.log('\n Otro ejemplo')
const withToString = base => 
  class extends base {
    toString() {
      let result = '{' 
      for (const key in this) {
        if (result !== '{') result += ', ' 
        result += `${key}=${this[key]}` 
      }
      return result + '}' 
    }
  }

const imprimeEmployee = withToString(Employee) 
const e = new imprimeEmployee('Harry Potter', 90000) // Una instancia de la nueva clase
console.log(e.toString()) 

