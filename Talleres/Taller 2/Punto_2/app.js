// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// cambio
const cambio = document.querySelector("#cambio");


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log('classList',styles)
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    console.log('valor:',count)

    if (count > 0) {
      value.style.color = "green";
      cambio.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
      cambio.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
      cambio.style.color = "#222";
    }
    value.textContent = count;
    // Agregar valor al segundo contador
    cambio.textContent = count;
  });
});
