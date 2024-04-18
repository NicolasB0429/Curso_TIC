// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  // const scrollHeight = window.pageYOffset;
  const scrollHeight = window.scrollY;
  //console.log("scrollY", scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  //console.log('height',navHeight)
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 370) {
    //console.log("show button arrow up");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log("id:", id);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    console.log("navHeight", navHeight);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log("containerHeight", containerHeight);
    const fixedNav = navbar.classList.contains("fixed-nav");
    console.log("element", element);
    let position = element.offsetTop - navHeight;
    console.log("offsetTop", element.offsetTop);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    console.log("posicion", position);
    window.scrollTo({
      left: 0,

      top: position,
    });
  });
});
// calculate heights
