// node this-reference.js

'use strict'

console.log('// Ejemplo oscuro con matrices, sin operador punto a la vista')

  class BankAccount {
    constructor() {
      this.balance = 0
      this.observers = []
    }
    addObserver(f) {
      this.observers.push(f)
    }
    notifyObservers() {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i]()
      } 
    }
    deposit(amount) {
      this.balance += amount
      this.notifyObservers()
    }
    withdraw(amount) {
      this.balance -= amount
      this.notifyObservers()
    }
  }
  
  const acct = new BankAccount()

{
  class UserInterface {
    log(message) {
      console.log({message})  
    }
    start() {
      acct.addObserver(function() { this.log('Más Dinero') })
      acct.deposit(1000)
    }
  }

  const ui = new UserInterface()
  ui.start()

{
console.log('\n Solución: función arrow')

  class UserInterface {
    log(message) {
      console.log({message})  
    }
    start() {
      acct.addObserver(() => { this.log('Más Dinero') })
      acct.deposit(1000)
    }
  }

  const ui = new UserInterface()
  ui.start()
}
