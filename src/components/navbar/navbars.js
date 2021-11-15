window.addEventListener("load", () => {
  var toggle = document.querySelector(".toggle");
  var times = document.querySelector(".times");
  var navbar = document.querySelector("nav");
  var f = document.querySelector(".f");
  var ol = document.querySelector(".ol");

  console.log(toggle);
  toggle.addEventListener("click", () => {
    toggle.style.display = "none";
    navbar.style.display = "flex";
  });
  times.addEventListener("click", () => {
    toggle.style.display = "flex";
    navbar.style.display = "none";
  });
  f.addEventListener("mouseover", () => {
    ol.style.display = "flex";
    // ol.style.transition = "5s all ease";
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    document.location.reload(true);
  }
});
