const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// Cambio 
const cambio = document.querySelector(".cambio");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(hexColor);
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  // Cambio de color al texto que dice el color
  color.style.color = hexColor;
  // Cambio de color al texto "background Color:"
  cambio.style.color= hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
