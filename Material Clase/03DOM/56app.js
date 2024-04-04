
// preventDefault() - previene comportamiento por defecto

const btn = document.querySelector(".btn");
const heading = document.querySelector('h1');
const link = document.getElementById('link');

btn.addEventListener('click', function(event) {
  console.log("btn", event.type);
  console.log("btn", this);
  console.log("btn",event.currentTarget);
  event.currentTarget.classList.add("blue");
  console.log("btn", event.currentTarget);
  console.log(event)
});

heading.addEventListener("click", (event) => {
  console.log("h1", event.currentTarget);
  console.log("h1", this);
});

function someFunc(e) {
  console.log("a", e.currentTarget);
  console.log('someF',this)
  e.preventDefault();
}

link.addEventListener('click', someFunc);
