"use strict";
console.log("\n Funciones que retornan objetos");
{
  function createEmployee(name, salary) {
    return {
      name: name,
      salary: salary,
      raiseSalary: function (percent) {
        this.salary *= 1 + percent / 100;
      },
    };
  }
  const pedro = createEmployee("Pedro", 90000);
  const luis = createEmployee("Luis", 100000);
  console.log("pedro:", pedro);
  console.log("luis:", luis);
  console.log(pedro.raiseSalary === luis.raiseSalary);
}

console.log("\n Métodos compartidos: Prototype");
{
  const employeePrototype = {
    raiseSalary: function (percent) {
      this.salary *= 1 + percent / 100;
    },
  };
  function createEmployee(name, salary) {
    const result = { name, salary };
    Object.setPrototypeOf(result, employeePrototype);
    return result;
  }
  const pedro = createEmployee("Pedro", 90000);
  const luis = createEmployee("Luis", 100000);
  console.log("pedro:", pedro);
  console.log("luis:", luis);
  console.log(pedro.raiseSalary === luis.raiseSalary);

  pedro.raiseSalary = function (rate) {
    this.salary = Number.MAX_VALUE;
  };
  pedro.raiseSalary(5);
  luis.raiseSalary(5);
  console.log("pedro:", pedro);
  console.log("luis:", luis);
}
