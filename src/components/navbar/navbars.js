window.addEventListener("load", () => {
  var toggle = document.querySelector(".toggle");
  var times = document.querySelector(".times");
  var navbar = document.querySelector("nav");
  toggle.addEventListener("click", () => {
    toggle.style.display = "none";
    navbar.style.display = "flex";
  });
  times.addEventListener("click", () => {});
});
