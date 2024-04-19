// node this-reference.js

'use strict'
console.log('\n Estilo Moderno')

class BankAccount {
  balance;

  constructor() { 
    this.balance = 0 
  }  
  
  deposit(amount) { 
    this.balance += amount 
  }

  withdraw(amount) { 
    this.balance -= amount 
  }
}

const harrysAccount = new BankAccount()

console.log('\n this es undefined cuando se llama un método sin un objeto')
const dosVeces = (what, arg) => { what(arg); what(arg) }

try {
  dosVeces(BankAccount.prototype.deposit, 500) // Error
  /*harrysAccount.deposit(500);
  harrysAccount.deposit(500);*/
} catch (exception) {
  console.log('\nError:', exception.message) // No encuentra balance
}

console.log('\n Solución: Una expresión arrow')
dosVeces(amount => harrysAccount.deposit(amount), 500)
console.log('harrysAccount:', harrysAccount) // BankAccount { balance: 1000 }
