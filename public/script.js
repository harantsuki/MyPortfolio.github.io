const menu = document.getElementById("menu");
const hbm = document.getElementById("hamburger-menu");

menu.addEventListener("click", function () {
  hbm.classList.toggle("active");
});
