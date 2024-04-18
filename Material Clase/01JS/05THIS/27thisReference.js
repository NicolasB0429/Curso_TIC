// node this-reference.js

'use strict'

// El this de un objeto se puede si se llama una función flecha, las otras funciones tienen this propio
console.log('// this no está definido en una función anidada')
{
  class BankAccount {
    constructor() { this.balance = 0 }  
    deposit(amount) { this.balance += amount }  
    withdraw(amount) { this.balance -= amount }
    reparteElDinero(accounts) {
      accounts.forEach(function(account) {
        account.deposit(this.balance / accounts.length)
          // el this está indefinido en la función anidada
      })
      this.balance = 0
    }
  }
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  try {
    petersAccount.reparteElDinero([paulsAccount, marysAccount])
  } catch (exception) {
    console.log('Error:', exception.message) // No puede leer propiedad balance está indefinida
  }
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 1000 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 0 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 0 }
}

console.log('\n Solución a la vieja usanza')

{
  class BankAccount {
    constructor() { this.balance = 0 }  
    deposit(amount) { this.balance += amount }  
    withdraw(amount) { this.balance -= amount }
    reparteElDinero(accounts) {
       const that = this
       accounts.forEach(function(account) {
         account.deposit(that.balance / accounts.length)
      })
      this.balance = 0
    }
  }
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  petersAccount.reparteElDinero([paulsAccount, marysAccount])
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 0 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 500 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 500 }
}

console.log('\\ Solución Elegante: función arrow')
{
  class BankAccount {
  constructor() { this.balance = 0 }  
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
  reparteElDinero(accounts) {
    accounts.forEach(account => {
      account.deposit(this.balance / accounts.length) 
        // this encontrado
    })
    this.balance = 0
  }
  }
  
  const petersAccount = new BankAccount()
  petersAccount.deposit(1000)
  const paulsAccount = new BankAccount()
  const marysAccount = new BankAccount()
  petersAccount.reparteElDinero([paulsAccount, marysAccount])
  console.log('petersAccount:', petersAccount) // BankAccount { balance: 0 }
  console.log('paulsAccount:', paulsAccount) // BankAccount { balance: 500 }
  console.log('marysAccount:', marysAccount) // BankAccount { balance: 500 }
}
