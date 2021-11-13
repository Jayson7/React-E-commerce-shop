window.addEventListener("load", () => {
  var toggle = document.querySelector(".toggle");
  var times = document.querySelector(".times");
  var navbar = document.querySelector("nav");
  toggle.addEventListener("click", () => {
    toggle.style.display = "none";
    navbar.style.display = "flex";
  });
  times.addEventListener("click", () => {
    toggle.style.display = "flex";
    navbar.style.display = "none";
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    document.location.reload(true);
  }
});
