document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbarMenu = document.querySelector(".navbar-menu");

  hamburgerMenu.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    hamburgerMenu.classList.toggle("change");
  });
});
