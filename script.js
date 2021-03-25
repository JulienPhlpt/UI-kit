// SCROLLED NAVBAR //
window.addEventListener("scroll", () => {
  var navbar = document.getElementById("nav");
  navbar.classList.remove("navbar-scrolled");

  if (window.scrollY >= 1) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// TOGGLE MENU //
function toggleMenu() {
  document
    .getElementById("hamb-dropdown")
    .classList.toggle("hamburger-dropdown-open");
  document.getElementById("hamb-menu").classList.toggle("hamburger-menu-open");
  document
    .getElementById("right-hamb")
    .classList.toggle("hamburger-right-cross");
  document.getElementById("left-hamb").classList.toggle("hamburger-left-cross");
}

// THEME SWITCH //
function switchTheme() {
  this.classList.toggle("theme-sun");
  this.classList.toggle("theme-moon");

  document.getElementById("theme").classList.toggle("theme");
  document.getElementById("theme-svg").classList.toggle("theme");
  document.getElementById("theme-svg2").classList.toggle("theme");
  document.getElementById("theme-svg3").classList.toggle("theme");

  document.getElementById("back-img").classList.toggle("background-image-dark");
  document.getElementById("back-img").classList.toggle("background-image");

  document.getElementById("nav-btn1").classList.toggle("text-button-dark");
  document.getElementById("nav-btn2").classList.toggle("text-button-dark");
  document.getElementById("nav-btn3").classList.toggle("text-button-dark");
  document.getElementById("nav-btn4").classList.toggle("text-button-dark");
}

document.querySelector(".theme-sun").addEventListener("click", switchTheme);
