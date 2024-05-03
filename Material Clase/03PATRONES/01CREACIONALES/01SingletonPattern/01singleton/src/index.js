import singletonCounter from "./counter.mjs";

let contador = singletonCounter

const buttonBlue = document.getElementById("blue");
buttonBlue.addEventListener("click", () => {
  contador.increment();
  console.log("contador total: ", contador.getCount());
});

const buttonRed = document.getElementById("red");
buttonRed.addEventListener("click", () => {
  contador.decrement();
  console.log("contador total: ", contador.getCount());
});

