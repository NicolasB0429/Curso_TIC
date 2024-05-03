function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

let num = 5;

if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

function factorialNoRecursivo(num) {
  let factorial = 1
  for (let i = num; i > 0; i--) {
    factorial *= i
  }
  return factorial
}

num = 10

if (num > 0) {
  let result = factorialNoRecursivo(num);
  console.log(`The factorial of ${num} is ${result}`);
}