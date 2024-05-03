const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "white",
  "blue",
  "orange",
  "purple",
  "brown",
];
const btn = document.getElementById("btn");
const ide = document.getElementById("ide");
const color = document.querySelector(".color");
// Cambio
const cambio = document.querySelector(".cambio");

const container = document.getElementById("container"); // Nuevo


btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  // Cambio de color al texto que dice el color
  color.style.color = colors[randomNumber];
  // Cambio de color al texto "background Color:"
  cambio.style.color = colors[randomNumber];

});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
