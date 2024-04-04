const amigos = ["juan1", "juan2", "juan3"];
let json = JSON.stringify(amigos);
console.log("amigos:", amigos);
localStorage.setItem("amigos", json);

const values = JSON.parse(localStorage.getItem("amigos"));
console.log(values[2]);

let frutas = [];
frutas.push("manzana");
frutas.push("naranja");
localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
  frutas = JSON.parse(localStorage.getItem("frutas"));
} else {
  frutas = [];
}

console.log(frutas);
frutas.push("durazno");
frutas.push("peras");
localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
  frutas = JSON.parse(localStorage.getItem("frutas"));
} else {
  frutas = [];
}
console.log(frutas);
